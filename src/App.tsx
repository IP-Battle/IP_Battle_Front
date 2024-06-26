import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ConnectionManager } from './components/socket/ConnectionManager'
import { ConnectionState } from './components/socket/ConnectionState'
import { Events } from './components/socket/Events'
import { ROUTES } from './constants/route'
import RootPage from './pages/page'
import ChatPage from './pages/waiting/chat/page'
import NotePage from './pages/waiting/note/page'
import WaitingPage from './pages/waiting/page'
import ProbLogPage from './pages/waiting/probLog/page'
import { socket } from './socket'

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [fooEvents, setFooEvents] = useState<string[]>([])

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true)
    }
    const onDisconnect = () => {
      setIsConnected(false)
    }
    const onFooEvent = (value: string) => {
      setFooEvents((prev) => [...prev, value])
      console.log(value)
    }
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('foo', onFooEvent)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('foo', onFooEvent)
    }
  }, [])

  return (
    <div className='App'>
      <div className='hidden'>
        <ConnectionState isConnected={isConnected} />
        <Events events={fooEvents} />
        <ConnectionManager />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.ROOT} element={<RootPage />} />
          <Route path={ROUTES.WAITING} element={<WaitingPage />}></Route>
          <Route path={ROUTES.WAITING_CHAT} element={<ChatPage />}></Route>
          <Route path={ROUTES.WAITING_PROBLOG} element={<ProbLogPage />}></Route>
          <Route path={ROUTES.WAITING_NOTE} element={<NotePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
