import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

function useTaskContext(){
    const context = useContext(TaskContext)

    if(context === undefined){
        throw Error("Não está dentro do contexto")
    }
    
    return context
}
export default useTaskContext