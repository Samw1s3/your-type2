import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'  
import Logo from '../assets/yt_logo.png'

import Spinner from '../components/spinner'

function Login() {
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section>
        <img src={Logo} alt="your type logo" width="200px"></img>
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