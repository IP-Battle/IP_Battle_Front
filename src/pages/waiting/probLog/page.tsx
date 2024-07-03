// TODO: 問題履歴画面作成
import MyButton from '@/components/ui/Button/MyButton'
import MyCard from '@/components/ui/Card/MyCard'
import SideMenu from '../sideMenu/sideMenu'

function ProbLogPage() {
  return (
    <SideMenu>
      <MyCard>
        {/** mapで実装 */}
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
        <MyButton className='rounded-none text-black'>{'probLog'}</MyButton>
      </MyCard>
    </SideMenu>
  )
}

export default ProbLogPage
