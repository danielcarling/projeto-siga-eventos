// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import Header from '../components/global/Header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
   return (
         <Component {...pageProps} />
  )
}
