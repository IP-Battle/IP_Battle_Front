import useGoToPage from '@/components/method/GoToPage/goToPage'
import { ROUTES } from '@/constants/route'
import { useEffect } from 'react'

const MatchingPage = () => {
  const goToPage = useGoToPage()

  useEffect(() => {
    const timer = setTimeout(() => {
      goToPage(ROUTES.MATCHING_PLAY)
    }, 3000)

    return () => clearTimeout(timer)
  }, [goToPage])

  return (
    <div className='items-center justify-center flex h-screen'>
      <p>matching...</p>
    </div>
  )
}

export default MatchingPage
