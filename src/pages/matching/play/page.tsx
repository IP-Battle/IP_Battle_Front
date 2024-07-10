import { questionType } from '@/App'
import MyButton from '@/components/ui/Button/MyButton'
import '@/index.css'
import { socket } from '@/socket'
import { Card, CardBody } from '@material-tailwind/react'
import { useEffect, useState } from 'react'

interface AnswerButtonProps {
  answer: string
  index: number
  onSelect: (index: number) => void
}

const PlayPage = () => {
  const [question, setQuestion] = useState<questionType | undefined>()
  const [results, setResults] = useState<{ [id: number]: boolean }>({})

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
    }
  }

  const AnswerButton: React.FC<AnswerButtonProps> = ({ answer, index, onSelect }) => (
    <div className='w-5/12'>
      <MyButton className='rounded-xl' fullWidth onClick={() => onSelect(index)}>
        {answer}
      </MyButton>
    </div>
  )

  const [remainingTime, setRemainingTime] = useState(180)

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          socket.emit('gameEnd', results)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [results])

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
          />
        ))}
      </div>
    </div>
  )
}

export default PlayPage
