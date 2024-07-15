import { questionType } from '@/App'
import useGoToPage from '@/components/method/GoToPage/goToPage'
import MyButton from '@/components/ui/Button/MyButton'
import { ROUTES } from '@/constants/route'
import { useRoom } from '@/contexts/RoomContext'
import '@/index.css'
import { socket } from '@/socket'
import { Card, CardBody } from '@material-tailwind/react'
import { useEffect, useState } from 'react'

interface AnswerButtonProps {
  answer: string
  index: number
  onSelect: (index: number) => void
  isSelected: boolean | undefined
  isCorrect: boolean | undefined
}

const PlayPage = () => {
  const { roomId } = useRoom()
  const LIMIT_TIME = 180
  const [question, setQuestion] = useState<questionType | undefined>()
  const [results, setResults] = useState<{ [id: number]: boolean }>({})
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [startTime] = useState<number>(Date.now())

  const goToPage = useGoToPage()

  useEffect(() => {
    const onResponseQuestion = (question: questionType) => {
      if (!Object.keys(results).includes(question.id.toString())) {
        setQuestion(question)
      }
    }
    socket.on('responseQuestion', onResponseQuestion)
    return () => {
      socket.off('responseQuestion', onResponseQuestion)
    }
  }, [results])

  const getAnswers = () => {
    if (!question) return []
    return [question.aSelect, question.iSelect, question.uSelect, question.eSelect]
  }

  const answerPrefixes = ['ア', 'イ', 'ウ', 'エ']

  const handleSelect = (index: number) => {
    if (question) {
      const isCorrect = question.answer === answerPrefixes[index]
      setResults((prevResults) => ({
        ...prevResults,
        [question.id]: isCorrect,
      }))
      setSelectedIndex(index)
    }
  }

  const AnswerButton: React.FC<AnswerButtonProps> = ({
    answer,
    index,
    onSelect,
    isSelected,
    isCorrect,
  }) => (
    <div className='w-5/12 relative'>
      {isSelected !== undefined && (
        <div
          className={`absolute top-0 left-0 right-0 flex justify-center items-center h-full pointer-events-none text-6xl ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
        >
          {isCorrect ? '〇' : '×'}
        </div>
      )}
      <MyButton
        className='rounded-xl'
        fullWidth
        onClick={() => onSelect(index)}
        disabled={selectedIndex !== null}
      >
        {answer}
      </MyButton>
    </div>
  )

  const [remainingTime, setRemainingTime] = useState(LIMIT_TIME)

  useEffect(() => {
    const updateRemainingTime = () => {
      const now = Date.now()
      const elapsed = Math.floor((now - startTime) / 1000)
      const newRemainingTime = LIMIT_TIME - elapsed

      if (newRemainingTime <= 0) {
        socket.emit('gameEnd', roomId, results)
        goToPage(ROUTES.FINISH_WAITING)
      } else {
        setRemainingTime(newRemainingTime)
      }
    }

    const timer = setInterval(updateRemainingTime, 1000)
    updateRemainingTime()

    return () => clearInterval(timer)
  }, [startTime, results, goToPage])

  return (
    <div className='flex flex-col items-center justify-center p-4 gap-8'>
      <div className='octagon-wrapper'>
        <div className='octagon text-black'>残り時間: {remainingTime}s</div>
        <div className='octagon text-black'>自分のスコア: {}</div>
      </div>
      <Card
        className='w-full max-w-full text-white max-h-screen overflow-y-auto p-4'
        style={{ backgroundColor: 'rgb(250, 199, 16)' }}
      >
        <CardBody className='flex flex-col gap-4'>
          <p className='font-semibold text-3xl'>{question?.questionText}</p>
        </CardBody>
      </Card>
      <div className='flex justify-center gap-4 w-full flex-wrap'>
        {getAnswers().map((answer, index) => (
          <AnswerButton
            key={index}
            answer={`${answerPrefixes[index]}. ${answer}`}
            index={index}
            onSelect={handleSelect}
            isSelected={selectedIndex !== null ? selectedIndex === index : undefined}
            isCorrect={
              selectedIndex !== null && question
                ? question.answer === answerPrefixes[index]
                : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}

export default PlayPage
