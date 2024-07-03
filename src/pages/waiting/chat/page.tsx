import MyCard from '@/components/ui/Card/MyCard'
import MaleImg from '@/images/Male.png'
import { IconButton, Input } from '@material-tailwind/react'
import { useEffect, useRef, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { SubmitHandler, useForm } from 'react-hook-form'
import SideMenu from '../sideMenu/sideMenu'

type ChatForm = {
  message: string
}

function ChatPage() {
  const { register, handleSubmit, reset } = useForm<ChatForm>()
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', owner: 'other' },
    { id: 2, text: 'Hi there!', owner: 'me' },
  ])
  const lastMessageRef = useRef<HTMLDivElement | null>(null)

  const onSubmit: SubmitHandler<ChatForm> = (data, event) => {
    event?.preventDefault()
    const newMessage = { id: messages.length + 1, text: data.message, owner: 'me' }
    setMessages([...messages, newMessage])
    reset()
  }

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <SideMenu>
      <MyCard bodyClassName='flex flex-col space-y-4 h-full'>
        <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
          <div className='overflow-auto overflow-x-hidden flex-grow'>
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.owner === 'me' ? 'justify-end mr-4' : 'justify-start'} my-2`}
                ref={index === messages.length - 1 ? lastMessageRef : null}
              >
                {message.owner !== 'me' && (
                  <IconButton size='sm' className='mr-2 bg-light-blue-400'>
                    <img src={MaleImg} alt='男性' />
                  </IconButton>
                )}
                <div
                  className={`p-2 rounded-lg ${message.owner === 'me' ? 'bg-yellow-600 text-black' : 'bg-yellow-600 text-black'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </Scrollbars>
        <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className='flex justify-between mt-4'>
          <Input
            {...register('message', { required: true })}
            className='form-input px-4 py-2 w-full rounded-md border-2 border-gray-200 text-black bg-yellow-600'
            placeholder='こんにちは！'
            label='メッセージを入力してください'
          />
        </form>
      </MyCard>
    </SideMenu>
  )
}

export default ChatPage
