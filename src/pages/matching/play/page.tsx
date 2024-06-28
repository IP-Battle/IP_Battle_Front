import MyButton from '@/components/ui/Button/MyButton'
import '@/index.css'
import { Card, CardBody } from '@material-tailwind/react'

interface AnswerButtonProps {
  answer: string
  index: number
}

const PlayPage = () => {
  const question =
    '事業者の信用維持や需要者の混同を回避するために、更新の申請を繰り返すことで、実質的に永続的な権利保有が可能な工業所有権はどれか。'
  const answers = ['意匠権', '実用新案権', '商標権', '特許権']
  const answerPrefixes = ['ア', 'イ', 'ウ', 'エ']

  const prefixedAnswers = answers.map((answer, index) => `${answerPrefixes[index]}. ${answer}`)

  const AnswerButton: React.FC<AnswerButtonProps> = ({ answer }) => (
    <div className='w-5/12'>
      <MyButton fullWidth>{answer}</MyButton>
    </div>
  )

  return (
    <div className='flex flex-col items-center justify-center p-4 gap-8'>
      <div className='octagon-wrapper'>
        <div className='octagon'>残り時間: {}s</div>
        <div className='octagon'>自分のスコア: {}</div>
      </div>
      <Card
        className='w-full max-w-full text-white max-h-screen overflow-y-auto p-4'
        style={{ backgroundColor: 'rgb(250, 199, 16)' }}
      >
        <CardBody className='flex flex-col gap-4'>
          <p className='font-semibold text-3xl'>{question}</p>
        </CardBody>
      </Card>
      <div className='flex justify-center gap-4 w-full flex-wrap'>
        {prefixedAnswers.map((answer, index) => (
          <AnswerButton key={index} answer={answer} index={index} />
        ))}
      </div>
    </div>
  )
}

export default PlayPage
