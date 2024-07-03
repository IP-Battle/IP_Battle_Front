import MyButton from '@/components/ui/Button/MyButton'
import { Checkbox } from '@material-tailwind/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ConfigPage = () => {
  const [isBGMCheked, setIsBGMCheked] = useState(true)
  const [isEffectChecked, setIsEffectChecked] = useState(true)

  const navigate = useNavigate()

  return (
    <div>
      <div className='flex flex-col items-end'>
        <MyButton className='w-1/4 rounded-xl mb-4' onClick={() => navigate(-1)}>
          戻る
        </MyButton>
      </div>
      <div className='flex flex-col gap-4 text-white text-4xl font-semibold'>
        <h1>・音量</h1>
        <div className='flex flex-col gap-4 ml-8'>
          <div className='flex items-center gap-2'>
            <p>：BGM</p>
            <Checkbox
              checked={isBGMCheked}
              onChange={() => setIsBGMCheked(!isBGMCheked)}
              style={{ transform: 'scale(1.5)' }}
            />
          </div>
          <div className='flex items-center gap-2'>
            <p>：効果音</p>
            <Checkbox
              checked={isEffectChecked}
              onChange={() => setIsEffectChecked(!isEffectChecked)}
              style={{ transform: 'scale(1.5)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfigPage
