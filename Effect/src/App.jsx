import { useEffect, useState } from 'react'
import './App.css'
import Profile from './Componentes/Profile'

function App() {
  const [count, setCount] = useState(0)
  const [countDois, setCountDois] = useState(100)

  //Primeira Forma como inicializador
  useEffect(() => {
    console.log('Console ao renderizar')
  })

  //Segunda Forma com estado atrelado
  useEffect(() => {
    console.log('Executando quando o estado count muda')
  }, [count])

  //Terceira Forma como um construtor
  useEffect(() => {
    console.log('Executando só uma vez')
  }, [])

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1) }>Contar</button>
      {count}

      <button onClick={() => setCountDois(prev => prev + 1) }>Contar Dois</button>
      {countDois}

      <Profile/>
    </>
  )
}

export default App
