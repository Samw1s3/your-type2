import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from '../auth/authService'

const initialState = {
    meetups: [],
    isError: false, 
    isSuccess: false, 
    isLoading: false, 
    message: ''
}

//create new meetup
export const createMeetup = createAsyncThunk('api/meetups', async (meetupData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await meetupsService.createMeetup(meetupData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    } 
    }
})

export const meetupSlice = createSlice ({
    name: 'meetup',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const {reset} = meetupSlice.actions
export default meetupSlice.reducer