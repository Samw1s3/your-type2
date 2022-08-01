import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createMeetup} from '../features/meetups/meetupsSlice'

function MeetupForm() {

    const [formData, setFormData] = useState({
        name: '',
        hair: '', 
        height: '', 
        physicalAttributes: '',
        conversation: '',
        laughs: '',
        butterflies: '', 
        eyeContact: '', 
        smile: '', 
        generalVibe: ''
    })

    const {name, hair, height, physicalAttributes, conversation, laughs, butterflies, eyeContact, smile, generalVibe } = formData

    const dispatch = useDispatch()

    const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

    const onSubmit = e => {
        e.preventDefault()
        const meetupData = {
            name,
             hair, 
             height, 
            physicalAttributes,
            conversation,
            laughs,
            butterflies, 
            eyeContact, 
            smile, 
            generalVibe
        }
        dispatch(createMeetup(meetupData))
    }

  return (
    <section className='form'>
    <form onSubmit={onSubmit}>
        <div className='form-group'>
            <label htmlFor='text'>Name</label>
            <input type="text" name='name' id='name' value={name} onChange={onChange} />
        </div>
        <div className='form-group'>
            <label htmlFor='text'>Hair</label>
            <input type="text" name='hair' id='hair' value={hair} onChange={onChange} />
        </div>
        <div className='form-group'>
            <label htmlFor='text'>Height</label>
            <input type="text" name='height' id='height' value={height} onChange={onChange} />
        </div>
        <div className='form-group'>
            <label htmlFor='text'>physicalAttributes</label>
            <input type="text" name='physicalAttributes' id='physicalAttributes' value={physicalAttributes} onChange={onChange} />
        </div>
        <div className='form-group'>
            <label htmlFor='text'>Conversation</label>
            <input type="text" name='conversation' id='conversation' value={conversation} onChange={onChange} />
        </div>
        <div className='form-group'>
            <label htmlFor='text'>Laughs</label>
            <input type="text" name='laughs' id='laughs' value={laughs} onChange={onChange} />
        </div>
        <div className='form-group'>
            <button className='btn btn-block' type='submit'>Add Meetup</button>
        </div>

    </form>
    </section>
  )
}

export default MeetupForm