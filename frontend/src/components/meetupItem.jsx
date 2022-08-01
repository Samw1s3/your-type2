import { useDispatch } from 'react-redux'
import { deleteMeetup } from '../features/meetups/meetupsSlice'

function MeetupItem({ meetup }) {
  const dispatch = useDispatch()
  console.log(meetup)

  return (
    <div className='meetup'>
      <div>{new Date(meetup.createdAt).toLocaleString('en-AU')}</div>
      <h2>{meetup.name}</h2>
      <h2>{meetup.hair}</h2>
      <h2>{meetup.height}</h2>


      <button onClick={() => dispatch(deleteMeetup(meetup._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default MeetupItem