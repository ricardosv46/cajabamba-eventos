import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import type { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import CarritoState from '../context/cart/CarritoState'
import PaymentState from '../context/payment/PaymentState'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo'
import { SessionProvider } from 'next-auth/react'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <CarritoState>
          <PaymentState>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PaymentState>
        </CarritoState>
      </SessionProvider>
    </ApolloProvider>
  )
}

export default MyApp
