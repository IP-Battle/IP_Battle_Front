import Female from '../../images/Female.png'
import Male from '../../images/Male.png'
import SideMenu from './sideMenu/sideMenu'

function WaitingPage() {
  return (
    <div>
      <SideMenu>
        <div className='flex items-center justify-center'>
          <div className='hidden lg:block lg:w-1/2'>
            <img src={Male} style={{ marginRight: '-50px' }} />
          </div>
          <div className='hidden lg:block lg:w-1/2'>
            <img src={Female} style={{ marginLeft: '-50px' }} />
          </div>
        </div>
      </SideMenu>
    </div>
  )
}

export default WaitingPage
