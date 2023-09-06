import { createContext, useContext, useState } from 'react'
import './App.css'

const contextExemplo = createContext()

function App() {
  const [nome, setNome] = useState('Carlos')
  const [sobrenome, setSobrenome] = useState('Silva')
  const [idade, setIdade] = useState('18')

  return (
    <>
      <contextExemplo.Provider value={{nome, sobrenome, setNome, idade}}>
        <ComponenteFilho/>
      </contextExemplo.Provider>
      <ComponenteTataraneto/>
    </>
  )
}

function ComponenteFilho(){
  const {setNome} = useContext(contextExemplo)
  setNome('João')
    return <ComponenteNeto/>
}

function ComponenteNeto(){
  const {nome, sobrenome} = useContext(contextExemplo)
  return(
    <>
      <h1>O nome da pessoa é {nome} {sobrenome}</h1> 
      <ComponenteBisneto/>
    </>
  ) 
   
}

function ComponenteBisneto(){
  const {idade} = useContext(contextExemplo)
  return <h2>A idade da pessoa é {idade}</h2>
}

function ComponenteTataraneto(){
  const {nome} = useContext(contextExemplo)
  return <div>Nome dentro do tataraneto {nome}</div>
}

export default App