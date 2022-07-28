import axios from 'axios'
import { defaultMemoize } from 'reselect'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.Stringify(response.data))
    }
    return response.data
}

const authService = {
    register,
}

export default authService 