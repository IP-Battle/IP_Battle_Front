import { socket } from '@/socket'
import { useEffect, useState } from 'react'

const FinishWaitingPage = () => {
  const [message, setMessage] = useState<string>()
  useEffect(() => {
    const onGameFinish = (judge: boolean) => {
      judge = true
      if (judge) {
        setMessage('勝利！')
      } else {
        setMessage('敗北...')
      }
    }
    socket.on('gameFinish', onGameFinish)
    return () => {
      socket.off('gameFinish', onGameFinish)
    }
  }, [])

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-5xl font-bold'>{message}</div>
    </div>
  )
}

export default FinishWaitingPage
