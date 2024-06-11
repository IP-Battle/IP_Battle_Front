import { useNavigate } from 'react-router-dom'

const useGoToPage = () => {
  const navigate = useNavigate()

  const goToPage = (path: string) => {
    return () => navigate(path)
  }

  return goToPage
}

export default useGoToPage
