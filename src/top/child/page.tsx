import useGoToPage from '@/components/GoToPage/goToPage'

const ChildPage = () => {
  const goToPage = useGoToPage()

  return (
    <div>
      <p>Child Page</p>
      <button onClick={goToPage('/')}>遷移</button>
    </div>
  )
}

export default ChildPage
