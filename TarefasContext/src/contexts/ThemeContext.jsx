import { createContext, useState } from "react";

//Vou usar no useContext
export const ThemeContext = createContext()

//Vou usar no HTML
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')
    function changeTheme(){
        setTheme(theme !== 'dark' ? 'dark' : 'light')
    }
    return <ThemeContext.Provider value={{theme, changeTheme}}>{children}</ThemeContext.Provider>

}
