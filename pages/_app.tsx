
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/global/global.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      {/* <Provider store={store}> */}
        <Component {...pageProps} />
      {/* </Provider> */}
    </Layout>
  )
}
export default MyApp












