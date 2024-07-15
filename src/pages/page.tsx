import useGoToPage from '@/components/method/GoToPage/goToPage'
import MyButton from '@/components/ui/Button/MyButton'
import { ROUTES } from '@/constants/route'
import { Cog8ToothIcon } from '@heroicons/react/16/solid'
import Female from '../images/Female.png'
import Male from '../images/Male.png'

function RootPage() {
  const goToPage = useGoToPage()
  return (
    <div className='flex items-center justify-center min-h-screen h-20'>
      <div className='flex flex-col lg:flex-row justify-end w-full'>
        <div className='hidden lg:block lg:w-1/4'>
          <img src={Male} style={{ marginRight: '-50px' }} /> {/** 画像挿入の例 */}
        </div>
        <div className='hidden lg:block lg:w-1/4'>
          <img src={Female} style={{ marginLeft: '-50px' }} />
        </div>
        <div className='w-full lg:w-3/5 text-left'>
          <div className='text-4xl lg:text-6xl text-white underline font-semibold flex flex-col gap-4 lg:gap-8 mb-16 lg:mb-20'>
            <p>ITパスポート</p>
            <p>オンライン対戦ゲーム</p>
          </div>
          <div className='lg:hidden'>
            <p>（キャラクター）</p>
          </div>
          <div className='flex flex-col gap-6 lg:gap-6 w-full lg:w-1/4'>
            <MyButton className='w-full lg:w-auto' onClick={() => goToPage(ROUTES.MATCHING)}>
              マッチング
            </MyButton>
            <MyButton className='w-full lg:w-auto' onClick={() => goToPage(ROUTES.WAITING)}>
              待機画面
            </MyButton>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 right-0 m-4'>
        <Cog8ToothIcon
          className='cursor-pointer size-20 text-gray-600'
          onClick={() => goToPage(ROUTES.CONFIG)}
        ></Cog8ToothIcon>
      </div>
    </div>
  )
}

export default RootPage
