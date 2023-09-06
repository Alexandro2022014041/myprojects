import { createContext, useState } from "react";

export const TaskContext = createContext()

export const TaskProvider = ({children}) =>{

    const [listaTarefas, setListaTarefas] = useState([])

    function cadastrarTarefa(tarefa){
        setListaTarefas([tarefa, ...listaTarefas])
    }

    return<TaskContext.Provider value={({listaTarefas, cadastrarTarefa})}>{children}</TaskContext.Provider>
}