
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/global/scss/global.css'
import { Provider } from 'react-redux'
import {store} from '../app/store/store'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Relativer, ThemeToggler, ToggleElement,  TogglerButton } from '../styles/global/styled-utils/Global.style'
import { darkTheme, lightTheme } from '../styles/global/styled-utils/styling-elements/Theme.style'
import { useState } from 'react'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { useEffect } from 'react'



function MyApp({ Component, pageProps }: AppProps) {
  const [theme, settheme] = useState(null)
  useEffect(() => {
    settheme(localStorage.getItem('theme') !== null ? (localStorage.getItem('theme') === "light" && "light" || localStorage.getItem('theme') === "dark" && "dark") : "light")
  }, [])

  const changeTheme = (theme) => {
    settheme(theme === "light"? "dark": "light")
    localStorage.setItem('theme' , (theme === "light"? "dark": "light"))
  }

  return (
    <Provider store={store}> 
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyle/>
          <Layout >
              <ThemeSwitcher theme={theme} setTheme={changeTheme}/>
              <Component {...pageProps} />
          </Layout>
        </>
      </ThemeProvider>
    </Provider>
  )
}
export default MyApp












