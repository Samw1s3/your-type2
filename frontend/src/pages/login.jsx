import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section>
        <h1 className="heading">
          <FaSignInAlt /> Login
        </h1>
        <p>
          Please login and start recording meetups
        </p>
      </section>

      <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <input type="email" className='form-control' id="email" name='email' value={email} placeholder='enter a username' onChange={onChange} />
            </div>
            <div className='form-group'>
              <input type="password" className='form-control' id="password" name='password' value={password} placeholder='enter your password' onChange={onChange} />
            </div>
            <div>
              <button type='submit' className='btn btn-block'>Submit</button>
            </div>
            </form>
          </section>
        </>
        )
}

        export default Login