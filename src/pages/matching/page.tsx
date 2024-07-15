import useGoToPage from '@/components/method/GoToPage/goToPage'
import { ROUTES } from '@/constants/route'
import { socket } from '@/socket'
import { useEffect, useState } from 'react'

export interface RoomIdProps {
  roomId: number
}

const MatchingPage = () => {
  socket.emit('matching')

  const goToPage = useGoToPage()
  const [roomId, setRoomId] = useState<number>()

  useEffect(() => {
    const onGameStart = (roomId: number) => {
      setRoomId(roomId)
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
