import MyButton from '@/components/ui/Button/MyButton'
import useGoToPage from '@/components/method/GoToPage/goToPage'
import SideMenu from './sideMenu/sideMenu'

function WaitingPage() {
  const goToPage = useGoToPage()
  return (
    <div>
      <SideMenu>
        <MyButton onClick={goToPage('/')}>test</MyButton>
      </SideMenu>
    </div>
  )
}

export default WaitingPage
