import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Container from '../../components/container'
import { useEntradasUsuario } from '../../services/useEntradasUsuario'
import FormUpdateAsiento from '../../components/forms/formUpdateAsiento'
const DetalleEntrada = () => {
  const navigate = useRouter()
  const { slug } = useRouter().query as any
  const { entradas, loading } = useEntradasUsuario(slug)
  const { status } = useSession()
  useEffect(() => {
    if (status !== 'authenticated') {
      navigate.push('/')
    }
  }, [status])

  return (
    <Container bgColor='bg-[#fff2e6]' className='px-5'>
      <div className='max-w-[1200px] py-10 mx-auto'>
        <div className=''>
          <h1 className='text-3xl font-bold'>Detalle de la compra</h1>
          <div className='flex justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-x-16 gap-y-10'>
            {entradas.map((entrada) => (
              <FormUpdateAsiento key={entrada?.asientoId} {...entrada} slug={slug} asientoId={entrada?.asientoId!} />
            ))}
          </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx)

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }

  return {
    props: {
      session: session
    }
  }
}

export default DetalleEntrada
