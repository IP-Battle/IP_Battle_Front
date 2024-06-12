import { Button, Radio, Slider, Typography } from '@material-tailwind/react'
import useGoToPage from '../components/GoToPage/goToPage'

function RootPage() {
  const goToPage = useGoToPage()
  return (
    <div>
      <Slider />
      <div className='flex flex-col items-center justify-center'>
        <p className='read-the-docs'>this is root page</p>
        <Button onClick={goToPage('/top')} className='mt-2'>
          topへ
        </Button>
        <br />
        <Radio name='type' label='HTML' defaultChecked />
        <Radio name='type' label='React' crossOrigin={undefined} />
        <Typography className='rotate-12 font-extrabold'>Typography</Typography>
      </div>
    </div>
  )
}

export default RootPage
