import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const { username, email, password, password2 } = formData

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
          <FaUser /> Register
        </h1>
        <p>
          Please create an account
        </p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <form onSubmit={onSubmit}>
            <input type="text" className='form-control' id="username" name='username' value={username} placeholder='enter a username' onChange={onChange}/>
          </form>
        </div>
        <div className='form-group'>
          <form>
            <input type="email" className='form-control' id="email" name='email' value={email} placeholder='enter a username' onChange={onChange}/>
          </form>
        </div>
        <div className='form-group'>
          <form>
            <input type="password" className='form-control' id="password" name='password' value={password} placeholder='enter your password' onChange={onChange}/>
          </form>
        </div>
        <div className='form-group'>
        <form>
            <input type="password" className='form-control' id="password2" name='password2' value={password2} placeholder='confirm your password'onChange={onChange} />
          </form>
        </div>
        <div>
          <button type='submit' className='btn btn-block'>Submit</button>
        </div>
      </section>
    </>
  )
}

export default Register