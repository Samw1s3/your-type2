import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    meetups: [],
    isError: false, 
    isSuccess: false, 
    isLoading: false, 
    message: ''
}

export const meetupSlice = createSlice ({
    name: 'meetup',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const {reset} = meetupSlice.actions
export default meetupSlice.reducer