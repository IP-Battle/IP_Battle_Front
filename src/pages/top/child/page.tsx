import useGoToPage from '@/components/GoToPage/goToPage'
import { Button, Option, Select } from '@material-tailwind/react'

const ChildPage = () => {
  const goToPage = useGoToPage()

  return (
    <div className='p-4 flex flex-col items-center justify-center gap-4'>
      <p className='font-bold'>Child Page</p>
      <Button onClick={goToPage('/')} className='w-full text-blue-100'>
        rootへ
      </Button>
      <Select label='itemを選択してください'>
        <Option>item1</Option>
        <Option>item2</Option>
      </Select>
    </div>
  )
}

export default ChildPage
