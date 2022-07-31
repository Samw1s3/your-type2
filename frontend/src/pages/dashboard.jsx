import Logo from '../assets/yt_logo.png'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux"
import MeetupForm from '../components/meetupForm'

function Dashboard() {

  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth) 

  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])
  // get user by id 


  // get meetups associated to user


  //post request to create new meeting 


  // newMeetup form should be new component
  return (
    <>
     <img src={Logo} alt="your type logo"></img>
     <section className='heading'>
      <h1>Welcome {user && user.username}, <br></br>Let's find your type</h1>
      <p>Meetups Dashboard</p>
     </section>
     <MeetupForm />
    </>
    
  )
}

export default Dashboard