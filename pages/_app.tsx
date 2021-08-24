
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/global/scss/global.css'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    // <Provider> 
      <Layout>
          <Component {...pageProps} />
      </Layout>
    // </Provider>
  )
}
export default MyApp












