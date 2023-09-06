import App from './App.jsx' 
import {createBrowserRouter } from 'react-router-dom'
import Cadastrar from './pages/Cadastrar.jsx'
import ListarTarefas from './pages/ListarTarefas.jsx'

export const routerCesul = createBrowserRouter([
    {
      path : "/",
      element : <App/>,
      children : [
        {path : "/cadastrar", element : <Cadastrar/>},
        {path : "/listar_tarefas", element : <ListarTarefas/>}
      ]
    }
  ])