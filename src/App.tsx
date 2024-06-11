import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopPage from './pages/top/page'
import RootPage from './pages/page'
import ChildPage from './pages/top/child/page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage />} />
        <Route path='/top' element={<TopPage />} />
        <Route path='/top/child' element={<ChildPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
