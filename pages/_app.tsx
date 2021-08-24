
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/global/scss/global.css'
import { Provider } from 'react-redux'
import store from '../app/store/store'
function MyApp({ Component, pageProps }: AppProps) {

  return (
    // <Provider> 
      <Layout store={store}>
          <Component {...pageProps} />
      </Layout>
    // </Provider>
  )
}
export default MyApp












