import { Button } from '@material-tailwind/react'
import { Cog8ToothIcon } from '@heroicons/react/16/solid'

function RootPage() {
  return (
    <>
      <div className='p-12 flex justify-end w-full'>
        <div className='w-3/5 text-left'>
          <div className='text-6xl text-white underline font-semibold flex flex-col gap-8 mb-20'>
            <div className='flex items-center'>
              <p>IT</p>
              <p>パスポート</p>
            </div>
            <p>オンライン対戦ゲーム</p>
          </div>
          <div className='flex flex-col gap-6 w-1/4'>
            <Button
              size='lg'
              className='text-xl p-6 rounded-full'
              style={{ backgroundColor: 'rgb(250, 199, 16)' }}
            >
              マッチング
            </Button>
            <Button
              size='lg'
              className='text-xl p-6 rounded-full'
              style={{ backgroundColor: 'rgb(250, 199, 16)' }}
            >
              待機画面
            </Button>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 right-0 m-4'>
        <Cog8ToothIcon className='cursor-pointer size-20 text-gray-600'></Cog8ToothIcon>
      </div>
    </>
  )
}

export default RootPage
