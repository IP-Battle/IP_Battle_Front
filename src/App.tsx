import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootPage from './pages/page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage />} />
        {/* <Route path='/??' element={<?? />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
