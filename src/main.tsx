import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ThemeProvider } from '@material-tailwind/react'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <div className='p-4 h-screen'>
      <App />
    </div>
    {/* </ThemeProvider> */}
  </React.StrictMode>
)
