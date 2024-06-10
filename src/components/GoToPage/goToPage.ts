import { useNavigate } from 'react-router-dom'

// カスタムフックの定義
const useGoToPage = () => {
  const navigate = useNavigate()

  // パスを引数に取り、そのパスに遷移する関数を返す
  const goToPage = (path: string) => {
    return () => navigate(path)
  }

  return goToPage
}

export default useGoToPage
