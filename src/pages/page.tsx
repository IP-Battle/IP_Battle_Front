import { Button, Radio, Slider } from '@material-tailwind/react'
import useGoToPage from '../components/GoToPage/goToPage'

function RootPage() {
  const goToPage = useGoToPage()
  return (
    <div className='flex flex-col items-center justify-center'>
      <Slider placeholder={'A'} onPointerEnterCapture={true} onPointerLeaveCapture={undefined} />
      <p className='read-the-docs'>this is root page</p>
      <Button
        onClick={goToPage('/top')}
        className='mt-2'
        placeholder={'placeholder'}
        onPointerEnterCapture={true}
        onPointerLeaveCapture={true}
      >
        topへ
      </Button>
      <br />
      <Radio
        name='type'
        label='HTML'
        defaultChecked
        onPointerEnterCapture={true}
        onPointerLeaveCapture={true}
        crossOrigin={true}
      />
      <Radio
        name='type'
        label='React'
        onPointerEnterCapture={true}
        onPointerLeaveCapture={true}
        crossOrigin={true}
      />
      <></>
    </div>
  )
}

export default RootPage
