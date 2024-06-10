import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopPage from './top/page'
import RootPage from './App'
import ChildPage from './top/child/page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage />} />
        <Route path='/top' element={<TopPage />} />
        <Route path='/top/child' element={<ChildPage />} />
        {/* 他のルートをここに追加 */}
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
