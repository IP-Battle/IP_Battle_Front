import { socket } from '@/socket'
import { useEffect, useState } from 'react'

const FinishWaitingPage = () => {
  const [message, setMessage] = useState<string>()
  useEffect(() => {
    const onGameFinish = (judge: number) => {
      if (judge === 0) {
        setMessage('勝利！')
      } else if(judge === 1) {
        setMessage('敗北...')
      }else {
        setMessage('引き分け')
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
