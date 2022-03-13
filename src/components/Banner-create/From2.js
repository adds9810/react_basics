import { useState } from 'react'

const Form = (props) => {
  const [formValues, setFormValues] = useState({
    width: 0,
    height: 0,
    backgroundColor: '',
    text: '',
  })

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.taget.value,
    })
  }

  const handleReset = () => {
    setFormValues({
      width: 0,
      height: 0,
      backgroundColor: '',
      text: '',
    })
  }

  const handleSubmit = () => {
    console.log('추가', formValues)
    props.onAddBanner(formValues)
  }

  return (
    <div>
      <input
        name="width"
        placeholder="넓이"
        onChange={handleInputChange}
        value={formValues.width}
      />
      <input
        name="height"
        placeholder="높이"
        onChange={handleInputChange}
        value={formValues.height}
      />
      <input
        name="background"
        placeholder="배경색"
        onChange={handleInputChange}
        value={formValues.backgroundColor}
      />
      <input
        name="text"
        placeholder="텍스트"
        onChange={handleInputChange}
        value={formValues.text}
      />
      <button onClick={handleSubmit}>베너추가</button>
      <button onClick={handleReset}>리셋</button>
    </div>
  )
}
export default Form
