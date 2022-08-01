import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import meetupsService from './meetupsService'

const initialState = {
    meetups: [],
    isError: false, 
    isSuccess: false, 
    isLoading: false, 
    message: ''
}

//create new meetup
export const createMeetup = createAsyncThunk('api/meetups', async (meetupData, thunkAPI) => {
    console.log(thunkAPI)
    try {
        const token = thunkAPI.getState().auth.user.token
        return await meetupsService.createMeetup(meetupData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    } 
    
})

export const meetupSlice = createSlice ({
    name: 'meetup',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createMeetup.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createMeetup.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.meetups.push(action.payload)
            })
            .addCase(createMeetup.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = meetupSlice.actions
export default meetupSlice.reducer