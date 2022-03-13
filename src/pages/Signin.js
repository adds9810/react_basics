import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SigninPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    try {
      // 1. 서버에서 전체 유저를 받아온다.
      // GET - 단순히 서버한테 데이터를 요청(fatch의 기본 옵션은 GET)
      // POST - 브라우저가 정보를 서버에 전달할 때
      // 비동기(fetch,Promise), 동기

      // 비동기를 동기처럼 보이게 만들어야 함.
      const response = await fetch('http://localhost:7777/users')
      const users = await response.json()

      console.log('users', users)

      // response를 받아온 후에 실행
      console.log('response', response)

      // 2. 받아온 유저의 정보와 우리가 입력받은 정보를 비교한다.
      // 정보가 있으면 로그인 성공, 정보가 없거나 틀리다면 로그인 실패

      // 입력한 이메일이 저장된 정보와 일치한가
      const user = users.find((user) => {
        return user.email === formValues.email
      })

      if (!user) {
        window.alert('이메일 또는 패스워드 정보를 확인해주세요')
        return
      }

      // 입력한 이메일이 저장된 정보는 일치
      if (user.password !== formValues.password) {
        window.alert('이메일 또는 패스워드 정보를 확인해주세요')
        return
      }

      // 로그인 성공
      // window.alert('로그인 성공!')
      window.localStorage.setItem(
        'USER',
        JSON.stringify({
          email: user.email,
          job: user.job,
          name: user.name,
        }),
      )
      navigate('/')
    } catch (e) {
      // 에러발생
      window.alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.')
    }
  }

  return (
    <div>
      <h1>로그인</h1>
      <input
        name="email"
        placeholder="이메일을 입력해주세요"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호을 입력해주세요"
        value={formValues.password}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>로그인</button>
    </div>
  )
}

export default SigninPage
