/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from 'react-router-dom'
// import { Events } from './components/socket/Events'
import { Button } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import useGoToPage from './components/method/GoToPage/goToPage'
import { ConnectionManager } from './components/socket/ConnectionManager'
import { ConnectionState } from './components/socket/ConnectionState'
import { ROUTES } from './constants/route'
import ConfigPage from './pages/config/page'
import MatchingPage from './pages/matching/page'
import PlayPage from './pages/matching/play/page'
import RootPage from './pages/page'
import ChatPage from './pages/waiting/chat/page'
import NotePage from './pages/waiting/note/page'
import WaitingPage from './pages/waiting/page'
import ProbLogPage from './pages/waiting/probLog/page'
import { socket } from './socket'

export type questionType = {
  id: number
  questionText: string
  aSelect: string
  iSelect: string
  uSelect: string
  eSelect: string
  answer: string
  explanation: string
  accuracyRate: number
}

const App = () => {
  const goToPage = useGoToPage()
  const [isConnected, setIsConnected] = useState(socket.connected)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [playerId, setPlayerId] = useState<string | undefined>()
  const [question, setQuestion] = useState<questionType | undefined>()

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true)
    }
    const onDisconnect = () => {
      setIsConnected(false)
    }
    const onJoinPlayerEvent = (playerid: string) => {
      setPlayerId(playerid)
    }
    const onResponseQuestion = (question: questionType) => {
      setQuestion(question)
    }
    const onGameStart = () => {
      goToPage(ROUTES.MATCHING_PLAY)
    }
    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('joinPlayer', onJoinPlayerEvent)
    socket.on('responseQuestion', onResponseQuestion)
    socket.on('gameStart', onGameStart)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('joinPlayer', onJoinPlayerEvent)
      socket.off('responseQuestion', onResponseQuestion)
      socket.off('gameStart', onGameStart)
    }
  }, [goToPage])

  return (
    <div className='App'>
      <div className='hidden'>
        <ConnectionState isConnected={isConnected} />
        {/* <Events events={playerId} /> */}
        <ConnectionManager />
      </div>
      <Button className='hidden' color='blue' onClick={() => socket.emit('feachQuestion', [2, 3])}>
        click
      </Button>
      <Routes>
        <Route path={ROUTES.ROOT} element={<RootPage />} />
        <Route path={ROUTES.WAITING} element={<WaitingPage />}></Route>
        <Route path={ROUTES.WAITING_CHAT} element={<ChatPage />}></Route>
        <Route path={ROUTES.WAITING_PROBLOG} element={<ProbLogPage />}></Route>
        <Route path={ROUTES.WAITING_NOTE} element={<NotePage />}></Route>
        <Route path={ROUTES.MATCHING} element={<MatchingPage />}></Route>
        <Route path={ROUTES.MATCHING_PLAY} element={<PlayPage />}></Route>
        <Route path={ROUTES.CONFIG} element={<ConfigPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
