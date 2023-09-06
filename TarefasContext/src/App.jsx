import { useContext } from 'react'
import './App.css'
import Header from './components/Header'
import { ThemeContext } from './contexts/ThemeContext'
import useThemeContext from './hooks/useThemeContext'
import { Outlet } from 'react-router-dom'

function App() {
  const {theme} = useThemeContext()
  return (
    <>
      <main  className={`${ theme === 'dark' ? 'dark' : ''}`}>
        <Header/>
        <Outlet/>
      </main>
    </>
  )
}
export default App
