import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootPage from './pages/page'
import WaitingPage from './pages/waiting/page'
import ProbLogPage from './pages/waiting/probLog/page'
import ChatPage from './pages/waiting/chat/page'
import NotePage from './pages/waiting/note/page'
import { ROUTES } from './constants/route'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<RootPage />} />
        <Route path={ROUTES.WAITING} element={<WaitingPage />}></Route>
        <Route path={ROUTES.WAITING_CHAT} element={<ChatPage />}></Route>
        <Route path={ROUTES.WAITING_PROBLOG} element={<ProbLogPage />}></Route>
        <Route path={ROUTES.WAITING_NOTE} element={<NotePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
