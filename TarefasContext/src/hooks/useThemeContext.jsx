import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

function useThemeContext(){
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw Error("Não está dentro do contexto")
    }

    return context
}
export default useThemeContext