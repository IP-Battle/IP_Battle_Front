import { socket } from '@/socket'

const MatchingPage = () => {
  socket.emit('matching')
  return <div className='items-center justify-center flex h-screen'>matching</div>
}

export default MatchingPage
