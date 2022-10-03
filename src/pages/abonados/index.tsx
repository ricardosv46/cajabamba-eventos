import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import IconCalendar from '../../../public/icons/IconCalendar'
import IconHour from '../../../public/icons/IconHour'
import Container from '../../components/container'
import Spinner from '../../components/spinner'
import { useAbonado } from '../../services/useAbonado'
import { usePreciosRefs } from '../../services/usePreciosRefs'

const colors = [
  'bg-[#F89F59]',
  'bg-[#FFD066]',
  'bg-[#FFDA99]',
  'bg-[#D03B3E]',
  'bg-[#E7565C]',
  'bg-[#E7565C]',
  'bg-[#F89F59]',
  'bg-[#FFD066]'
]

const Abonados = () => {
  const { abono, loading } = useAbonado()
  console.log(abono)
  const router = useRouter()
  const handleModal = (id: string) => {
    router.push({
      pathname: `/abonados/${id}`,
      query: { fecha: abono?.fecha, hora: abono?.hora }
    })
  }
  const { precios } = usePreciosRefs()

  useEffect(() => {
    router.push('/')
  }, [])

  return (
    <>
      <div className="relative w-full ">
        {loading ? (
          <Spinner />
        ) : (
          <Image
            src={abono?.imagenPrincipal?.url!}
            width={'100%'}
            height={'100%'}
            layout="fill"
            objectFit="cover"
            className="-z-10 "
            alt="flyer"
          />
        )}
        <Container bgColor="backdrop-blur-lg" className="pb-5 pt-36 text-primary">
          <main className="flex flex-col gap-5 lg:px-5 lg:flex-row">
            <section className=" w-full lg:w-[760px]  lg:h-[780px] gap-5  flex flex-col lg:flex-row">
              <div className="w-full h-full bg-white rounded-lg">
                <div className="flex flex-col px-8 py-5">
                  <div className="">
                    <h1 className="text-3xl font-extrabold">{abono?.titulo}</h1>
                    <h2 className="text-3xl font-extrabold">Compra tu Abono</h2>
                  </div>
                  <div className="flex items-center mt-4 gap-x-5"></div>
                  <div className="flex justify-center mt-5 ">
                    <Image
                      objectFit="contain"
                      src={`/imgs/compra/coliseo.png`}
                      alt="Picture of the author"
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="flex-1 p-5 py-5 bg-white border rounded-lg shadow-lg lg:px-8">
              {loading ? (
                <Spinner />
              ) : (
                <article className="flex flex-col gap-2">
                  <Image
                    src={abono?.imagenSecundaria?.url!}
                    alt="Picture of the author"
                    width={500}
                    height={350}
                    loading="lazy"
                    className="object-cover"
                  />
                  <h2 className="mt-2 text-2xl font-bold text-center text-primary ">
                    {abono?.titulo}
                  </h2>
                  <div className="flex items-center justify-center gap-x-5"></div>
                  <p className="text-center text-md text-text">
                    ¡Disfruta una emocionante tarde de toros en la comodidad de nuestras butacas!
                  </p>
                </article>
              )}
              <article className="my-5">
                <h2 className="text-2xl font-bold text-primary ">Abonos</h2>
                <section className="flex flex-col gap-2">
                  {precios?.map((item, index) => (
                    <article
                      key={item?.tendido}
                      className="shadow-md rounded-lg bg-[#f9f9f9] border flex justify-between p-3 items-center ">
                      <div>
                        <p className="text-sm font-semibold leading-5 text-primary">
                          {item?.titulo}
                        </p>
                        <p className="text-sm font-semibold leading-5 text-primary">
                          desde S/ {item?.precio}
                        </p>
                      </div>

                      <button
                        onClick={() => handleModal(item?.tendido!)}
                        className={`py-2 px-8 rounded-md text-white font-semibold ${colors[index]} `}>
                        Asientos
                      </button>
                    </article>
                  ))}
                </section>
              </article>
            </section>
          </main>
        </Container>
        <Container
          bgColor="bg-white"
          className="flex flex-col justify-between gap-10 p-5 lg:flex-row ">
          <article className="w-full bg-white rounded-lg  top-[30.5rem] p-5 lg:p-9 flex flex-col gap-5 border shadow-lg z-0">
            <h1 className="text-2xl font-bold lg:text-5xl text-primary ">
              Vive la emoción de cerca!
            </h1>
            <p className="font-semibold text-md text-primary">{abono.descripcionLarga}</p>
            <p className="font-bold text-md text-primary">Información adicional</p>
            <h3>Términos y condiciones:</h3>
            <h3 className="-mt-5">ANTES DE COMPRAR:</h3>
            {abono?.terminosCondiciones}
          </article>

          <section className="z-0 flex items-start justify-center py-5">
            <article className="border w-full  lg:w-[280px] xl:w-[380px] p-3 rounded-md flex flex-col gap-1 shadow-xl">
              <h2 className="text-2xl font-bold text-primary">Cajabamba, Cajamarca</h2>
              <p className="font-semibold text-md text-text">Fundo Cajabamba</p>
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6091463004136!2d-78.04657189999999!3d-7.61743725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b20761c240a495%3A0x5fc7ba61400343be!2sPlaza%20de%20Toros%20de%20Cajabamba%2C%20Cajabamba%2006351!5e0!3m2!1ses-419!2spe!4v1661791310005!5m2!1ses-419!2spe"
                  width="100%"
                  height="350"
                  loading="lazy"
                />
              </div>
            </article>
          </section>
        </Container>
      </div>
    </>
  )
}

export default Abonados
