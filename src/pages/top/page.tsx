import useGoToPage from '@/components/GoToPage/goToPage'
import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react'

const TopPage = () => {
  const goToPage = useGoToPage()

  return (
    <div className='p-10 flex flex-col items-center justify-center'>
      <Card className='w-full'>
        <CardHeader>
          <p>CardHeader</p>
        </CardHeader>
        <CardBody className='flex gap-4 items-center'>
          <p>Top Page</p>
          <Button onClick={goToPage('/top/child')}>childへ</Button>
        </CardBody>
        <CardFooter>
          <p>CardFooter</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default TopPage
