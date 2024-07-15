import useGoToPage from '@/components/method/GoToPage/goToPage'
import { ROUTES } from '@/constants/route'
import { useRoom } from '@/contexts/RoomContext'
import { socket } from '@/socket'
import { useEffect } from 'react'

const MatchingPage = () => {
  const { setRoomId } = useRoom()
  const goToPage = useGoToPage()

  useEffect(() => {
    socket.emit('matching')

    const onGameStart = (roomId: number) => {
      setRoomId(roomId)
      goToPage(ROUTES.MATCHING_PLAY)
    }

    socket.on('gameStart', onGameStart)

    return () => {
      socket.off('gameStart', onGameStart)
    }
  }, [goToPage, setRoomId])

  return <div className='items-center justify-center flex h-screen'>matching</div>
}

export default MatchingPage
