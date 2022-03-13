import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 모든 컴포넌트의 최상위 부모

// context api => 다음주
// BrowserRouter = 브라우저 히스토리 정보를 담고 있는 context api
// 박스로 감싸져 있어야 박스의 정보에 접근이 가능하다.
import BannerPage from './pages/banner'
import BannerCreatePage from './pages/Banner-create'
import HomePage from './pages/Home'
import SigninPage from './pages/Signin'
import SignupPage from './pages/Signup'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/banner" element={<BannerPage />}></Route>
          <Route path="/banner-create" element={<BannerCreatePage />}></Route>
          <Route path="/signin" element={<SigninPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
