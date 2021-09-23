  export const lightTheme = {
      body: '#F2F2F3',
      text: '#363537',
      toggleBorder: '#FFF',
      toggleTheme:"0px",
      toggleThemeColor:"#00090E",
      themeTogglerCont: "#FFFFFF",
      themeTogglerContBorder: "black",
      backgroundMain:"#00090e",
      navbar: {
        navBackground:"#FFFFFF",
        navLogoText:"#f2f2f3",
        navBorder:"#ADB9B9",
        navLinks:"#9ea1a3",
        navLinksHovered:"#f2f2f3",
        navPersonName:"#032728",
        navLogin:"0",
        navRegister:"0",
        navLogout:"#000000"
      },
      pageTabs: {
        contBG:"#ffffff",
        border:"gray",
        hover:{
          border:"lightgray",
        }
      }
  }
  export const darkTheme = {
    body: '#00090E',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    logoWord: "576769",
    toggleTheme:"31px",
    toggleThemeColor:"#00090E",
    themeTogglerCont:"#00090E",
    themeTogglerContBorder: "00090E",
    backgroundMain:"#00090e",
    navbar: {
      navBackground:"#00090E",
      navLogoText:"#4C5B5F",
      navBorder:"#49585C",
      navLinks:"#879B9D",
      navLinksHovered:"#D5FFFF",
      navPersonName:"#879B9D",
      navLogin:"1",
      navRegister:"1",
      navLogout:"#FFFFFF"
    },
    pageTabs: {
      contBG:"#11191e",
      border:"gray",
      hover:{
        border:"lightgray",
      }
    }
  }


  export type ThemeType = typeof lightTheme
