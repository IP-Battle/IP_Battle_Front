import useGoToPage from '@/components/method/GoToPage/goToPage'
import { ROUTES } from '@/constants/route'
import { socket } from '@/socket'
import { useEffect } from 'react'

const MatchingPage = () => {
  socket.emit('matching')

  const goToPage = useGoToPage()

  useEffect(() => {
    const onGameStart = () => {
      goToPage(ROUTES.MATCHING_PLAY)
    }
    socket.on('gameStart', onGameStart)

    return () => {
      socket.off('gameStart', onGameStart)
    }
  }, [goToPage])
  return <div className='items-center justify-center flex h-screen'>matching</div>
}

export default MatchingPage
