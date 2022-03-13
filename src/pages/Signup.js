import { useState } from 'react'

const SignupPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    job: '',
    name: '',
  })

  const handleSubmit = () => {
    // 1. 유효성 어뚱한 값이 들어가면 안됨

    // 2. 요청을 보낸다
    fetch('http://localhost:7777/users', {
      method: 'POST',
      handers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    })

    // 3. 요청이 성공적으로 되었는지 판단(response.ok, response.status === 200)
    // 4. 회원가입 성공 후 로그인페이지로 이동
  }
  return (
    <div>
      <button onClick={handleSubmit}>회원가입</button>
    </div>
  )
}
export default SignupPage
