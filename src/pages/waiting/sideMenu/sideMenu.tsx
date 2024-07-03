import useGoToPage from '@/components/method/GoToPage/goToPage'
import MyButton from '@/components/ui/Button/MyButton'
import { ROUTES } from '@/constants/route'
import React from 'react'

/**FIX: パディング修正 */
const SideMenu = ({ children }: { children?: React.ReactNode }) => {
  const goToPage = useGoToPage()
  return (
    <div className='flex' style={{ minHeight: 'calc(100vh - 48px)' }}>
      <div className='flex flex-col justify-end gap-8 w-1/4 mr-4'>
        <MyButton onClick={() => goToPage(ROUTES.MATCHING)}>プレイ</MyButton>
        <MyButton onClick={() => goToPage(ROUTES.WAITING_CHAT)}>チャット</MyButton>
        <MyButton onClick={() => goToPage(ROUTES.WAITING_PROBLOG)}>問題履歴</MyButton>
        <MyButton onClick={() => goToPage(ROUTES.WAITING_NOTE)}>注意画面</MyButton>
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  )
}

export default SideMenu
