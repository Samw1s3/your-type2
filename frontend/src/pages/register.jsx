import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'  
import { FaUser } from 'react-icons/fa'
import Spinner from '../components/spinner'

function Register() {
  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  const { username, email, password, password2 } = formData

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

    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        username,
         email, 
         password
      }

      dispatch(register(userData))

    }
  }
  if(isLoading){
    return <Spinner />
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
            <input type="email" className='form-control' id="email" name='email' value={email} placeholder='enter your email' onChange={onChange}/>
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