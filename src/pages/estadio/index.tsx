import React, {
  LegacyRef,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
const Estadio = () => {
  const [ids, setIds] = useState<string[]>([])
  const ref = useRef<HTMLButtonElement>(null)
  console.log(ids)

  const data = [
    { fila: 'A', columnas: 66 },
    { fila: 'B', columnas: 60 },
    { fila: 'C', columnas: 58 },
    { fila: 'D', columnas: 30 },
    { fila: 'E', columnas: 45 }
  ]

  const filas = useMemo(() => {
    let tfilas: any = {}

    for (let i = 0; i < data.length; i++) {
      tfilas[data[i].fila] = new Array(data[i].columnas)
        .fill(null)
        .map((_, i) => i + 1)
    }
    return tfilas

  }, [])

  const selectId = (id: string) => {
    if (ids.includes(id)) {
      // const newids = ids.filter((item) => item !== id)
      // setIds(newids)
      setIds([...ids])
    } else {
      setIds([...ids, id])
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      for (let i = 0; i < ids.length; i++) {
        if (ids.includes(ids[i])) {
          let intro = window.document.getElementById(ids[i])!
          intro.style.backgroundColor = '#A02E2B'
          intro.style.color = '#FFFFFF'
        } else {
          let intro = window.document.getElementById(ids[i])!
          intro.style.backgroundColor = '#EAB308'
          intro.style.color = '#000000'
        }
      }
    }
  }, [ids])

  return (
    <div className='flex justify-center'>
      <div className='flex gap-3 justify-start overflow-x-scroll no-scrollbar '>
        <TransformWrapper initialScale={1}>
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <div className='overflow-x-scroll no-scrollbar p-5 '>
              <div className='overflow-x-scroll p-5 custom-scroll'>
                <TransformComponent>
                  <div className='flex flex-col gap-3 justify-center items-center '>
                    {Object.keys(filas).map((fila) => (
                      <div
                        key={fila}
                        className='flex justify-center items-center gap-1'
                      >
                        {filas[`${fila.toString()}`].map(
                          (columna: any, index: any) => {
                            if (index < columna) {
                              return (
                                <button
                                  ref={ref}
                                  id={`${fila}${columna.toString()}`}
                                  key={`${fila}${columna.toString()}`}
                                  onClick={() =>
                                    selectId(`${fila}${columna.toString()}`)
                                  }
                                  className='rounded-full h-5 w-5 bg-yellow-500 flex justify-center items-center '
                                >
                                  <p className='text-[10px] font-mono'>
                                    {fila}
                                    {columna}
                                  </p>
                                </button>
                              )
                            } else return null
                          }
                        )}
                      </div>
                    ))}
                  </div>
                </TransformComponent>
              </div>
              <div className='flex justify-end gap-3'>
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>x</button>
              </div>
            </div>
          )}
        </TransformWrapper>
      </div>
    </div>
  )
}

export default Estadio
