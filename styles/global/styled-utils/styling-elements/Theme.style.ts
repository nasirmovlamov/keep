  export const lightTheme = {
      body: '#E2E2E2',
      text: '#363537',
      toggleBorder: '#FFF',
      toggleTheme:"0px",
      toggleThemeColor:"#00090E",
      themeTogglerCont: "#FFFFFF",
      themeTogglerContBorder: "black",
      navbar: {
        navBackground:"#FFFFFF",
        navLogoText:"#57676A",
        navBorder:"#ADB9B9",
        navLinks:"#697E7F",
        navLinksHovered:"#032728",
        navPersonName:"#032728",
        navLogin:"0",
        navRegister:"0",
        navLogout:"#000000"
      },
      pageTabs: {
        contBG:"#11191e",
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
