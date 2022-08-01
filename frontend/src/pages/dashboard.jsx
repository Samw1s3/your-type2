import Logo from '../assets/yt_logo.png'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import MeetupForm from '../components/meetupForm'
// import MeetupItem from '../components/meetupItem'
import Spinner from '../components/spinner'
import { getMeetups, reset} from '../features/meetups/meetupsSlice'

function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth) 
  const { isLoading, isError, message} = useSelector((state) => state.meetups)

  
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getMeetups())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
     <img src={Logo} alt="your type logo"></img>
     <section className='heading'>
      <h1>Welcome {user && user.username}, <br></br>Let's find your type</h1>
      <p>Meetups Dashboard</p>
     </section>
     <MeetupForm />
     <section>  
      
     </section>
    </>
    
  )
}

export default Dashboard