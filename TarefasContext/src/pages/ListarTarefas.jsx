import useTaskContext from "../hooks/useTaskContext"

function ListarTarefas(){
    const {listaTarefas} = useTaskContext()

    return(
        <main>
            <h1>teste</h1>
            <section>
                <ul>
                    {
                        listaTarefas.map((tarefa) => (
                            <li>{tarefa.nomeTarefa}</li>
                        ))
                    }
                </ul>
            </section>
        </main>
    )
}
export default ListarTarefas