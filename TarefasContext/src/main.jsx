import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { routerCesul } from './router.jsx'
import { TaskProvider } from './contexts/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <RouterProvider router={routerCesul}/>
      </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
