import * as ReactDOM from 'react-dom'
import { Fragment, useEffect, useState } from 'react'

import Modal from '../modal'
import { PaymePayload } from '../../data/paydata'
import Image from 'next/image'
import IconPayme from '../../../public/icons/IconPayme'

interface Props {
  isOpen: boolean
  payload: PaymePayload
  onClose: () => void
  onChange: (data: any) => void
}

const PAYME_URL_PRD = 'https://d23b52o2im4p82.cloudfront.net'
const PAYME_URL_DEV = 'https://alignet-flex-demo.s3.amazonaws.com'
const PAYME_KEY_PRD =
  'g51BswhZXrQzyPH2EMl1KmDrBK0li7bxEhpB0YLUGNGdlJbIWkGj3fiLqIeFVUe2'
const PAYME_KEY_DEV =
  'FsVVX37w7ZSK1HNQ8NXxDhFEFLXjREorode1sokWZzz2ZahPfG1F35DpOd1miSuh'

const ModalPayme = ({ isOpen, onClose, onChange, payload }: Props) => {
  const [error, setError] = useState(false)
  const [scriptReady, setScriptReady] = useState(false)

  // Load css
  useEffect(() => {
    let linkcss: HTMLLinkElement

    if (typeof window !== 'undefined') {
      linkcss = document.createElement('link')
      linkcss.type = 'text/css'
      linkcss.rel = 'stylesheet'
      linkcss.href = `${PAYME_URL_PRD}/css/flex-capture.css`

      document.head.append(linkcss)
    }
  }, [])

  // Load js
  useEffect(() => {
    let scriptjs: HTMLScriptElement

    if (typeof window !== 'undefined') {
      scriptjs = document.createElement('script')
      scriptjs.type = 'text/javascript'
      scriptjs.onload = () => setScriptReady(true)
      scriptjs.src = `${PAYME_URL_PRD}/flex-capture.min.js`

      document.head.append(scriptjs)
    }
  }, [])

  useEffect(() => {
    const paymeForm = document.querySelector('#payme')

    if (scriptReady && isOpen) {
      // @ts-ignore
      const capture = new FlexCapture({
        payload,
        key: PAYME_KEY_PRD,
        additionalFields: []
      })

      capture.init(paymeForm, (data: any) => {
        const isSuccess = data?.transaction?.meta?.status?.code === '00'
        if (!isSuccess) {
          setError(true)
        } else {
          setError(false)
          onChange(data)
          onClose()
        }
      })
    }
  }, [isOpen, payload, onClose, onChange, scriptReady])

  return (
    <Fragment>
      {scriptReady &&
        ReactDOM.createPortal(
          <Modal
            isOpen={isOpen}
            onClose={() => {
              onClose()
              setError(false)
            }}
          >
            <div className="bg-white p-3 rounded">
              <div className="grid place-items-center mb-5">
                <Image
                  alt="logo"
                  width={180}
                  height={60}
                  className="filter-logo"
                  src="/imgs/logos/logo.png"
                />
              </div>
              {isOpen && <div id="payme" />}
              {error && <p>Ha ocurrido un error intente nuevamente</p>}
              <div className="grid place-items-center my-5">
                <IconPayme width={160} height={40} />
              </div>
            </div>
          </Modal>,
          document.getElementById('portal') as Element
        )}
    </Fragment>
  )
}

export default ModalPayme
