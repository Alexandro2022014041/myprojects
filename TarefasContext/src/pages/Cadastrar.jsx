import { useState } from "react"
import useTaskContext from "../hooks/useTaskContext"

function Cadastrar(){
    const [nomeTarefa, setNomeTarefa] = useState("")
    const {cadastrarTarefa} = useTaskContext()

    return(         
            <main>
                <h1>Cadastrar uma tarefa</h1>
                <section>
                    <label htmlFor="">Informe o nome da tarefa</label>
                    <input type="text" value={nomeTarefa} onChange={(e) => setNomeTarefa(e.target.value)}/>
                    <button onClick={() => cadastrarTarefa({nomeTarefa})}>Cadastrar</button>
                </section>
            </main>        
    )
}
export default Cadastrar