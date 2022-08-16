import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// import required modules
import { Autoplay, Pagination } from "swiper";
import OpenGraph from "../../components/openGraph";
const Plaza = () => {
  return (
    <>
      <OpenGraph
        title="Cajabamba - La Plaza"
        link="Cajabamba"
        description="La Plaza de Toros Cajabamba fue inaugurada en el año 2009, siendo un ruedo sin graderías, el punto de encuentro y lugar donde se incubó la nueva generación de aficionados prácticos."
        domain="cajabamba.plazaticket.com"
        img="https://cajabamba.plazaticket.com/imgs/la-esperanza/la-esperanza-01.jpg"
        keywords="Entradas,Eventos,PLazas"
        url="https://cajabamba.plazaticket.com/"
      />

      <section className="bg-fondo  ">
        <div className="banner-parallax-plaza">
          <div className="mx-auto my-0 w-[90%] xl:w-[1200px]">
            <div className=" flex flex-col md:flex-row  py-16">
              <div className="w-full sm:w-[80%] lg:w-[58%]  flex items-center ">
                <div className="w-full flex flex-col md:items-start gap-5 ">
                  <h1 className="text-5xl text-primary font-bold text-center ">
                    LA PLAZA
                  </h1>
                  <p className="text-justify px-0 text-[#505050] font-normal text-[16px] ">
                    La Plaza de Toros Cajabamba fue inaugurada en el año
                    2009, siendo un ruedo sin graderías, el punto de encuentro y
                    lugar donde se incubó la nueva generación de aficionados
                    prácticos, llenando aquel año cada sábado con encerronas
                    taurinas y gratos momentos de confraternidad. <br />
                    <br />
                    Buscando ser la casa del taurino de buena voluntad, se
                    amplió en una primera etapa dotándola de un callejón que
                    permita el buen desarrollo de un festejo taurino y cómodas
                    butacas en las tres filas más cercanas al ruedo. Bajo esa
                    configuración se albergaron las primeras corridas de toros
                    formales brindando un lugar muy especial a la afición
                    taurina, que fue creando el ambiente y la identidad de La
                    Esperanza, en un espacio de campo con sabor criollo y
                    fraternidad. <br />
                    <br />Y así, la necesidad de albergar más afición tras vivir
                    esta pandemia hizo que la plaza creciera mucho más, contando
                    ahora con un tendido fijo de 12 filas y 5 palcos, capaz de
                    albergar en su totalidad cerca de 3000 personas, manteniendo
                    su coqueta identidad y esa personalidad que invita a
                    disfrutar una tarde de toros entre amigos.
                  </p>
                  <div className="w-full aspect-video my-8">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/v0fHMdOB0fw"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <p className="text-justify px-0 text-[#505050] font-normal text-[16px] ">
                    La Plaza de Toros Cajabamba fue inaugurada en el año
                    2009, siendo un ruedo sin graderías, el punto de encuentro y
                    lugar donde se incubó la nueva generación de aficionados
                    prácticos, llenando aquel año cada sábado con encerronas
                    taurinas y gratos momentos de confraternidad. <br />
                    <br />
                    Buscando ser la casa del taurino de buena voluntad, se
                    amplió en una primera etapa dotándola de un callejón que
                    permita el buen desarrollo de un festejo taurino y cómodas
                    butacas en las tres filas más cercanas al ruedo. Bajo esa
                    configuración se albergaron las primeras corridas de toros
                    formales brindando un lugar muy especial a la afición
                    taurina, que fue creando el ambiente y la identidad de La
                    Esperanza, en un espacio de campo con sabor criollo y
                    fraternidad.
                    <br />
                    <br />Y así, la necesidad de albergar más afición tras vivir
                    esta pandemia hizo que la plaza creciera mucho más, contando
                    ahora con un tendido fijo de 12 filas y 5 palcos, capaz de
                    albergar en su totalidad cerca de 3000 personas, manteniendo
                    su coqueta identidad y esa personalidad que invita a
                    disfrutar una tarde de toros entre amigos.
                  </p>

                  <div className="w-full">
                    <Swiper
                      loop={true}
                      autoplay={{
                        delay: 4000,
                        disableOnInteraction: true,
                      }}
                      spaceBetween={30}
                      grabCursor={true}
                      pagination={true}
                      slidesPerView={1}
                      modules={[Autoplay, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="w-full flex justify-center items-center ">
                          <Image
                            className="cursor-pointer relative"
                            src={`/imgs/la-esperanza/la-esperanza-02.jpg`}
                            width={820}
                            height={500}
                            alt="logo"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex justify-center items-center ">
                          <Image
                            className="cursor-pointer relative"
                            src={`/imgs/la-esperanza/la-esperanza-03.jpg`}
                            width={820}
                            height={500}
                            alt="logo"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="flex justify-center items-center ">
                          <Image
                            className="cursor-pointer relative"
                            src={`/imgs/la-esperanza/la-esperanza-01.jpg`}
                            width={820}
                            height={500}
                            alt="logo"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="relative  pl-16 flex   sm:bg-transparent">
                <div className="absolute right-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plaza;
