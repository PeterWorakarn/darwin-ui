import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeadSEO from '../feature/common/components/HeadSEO'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadSEO />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
