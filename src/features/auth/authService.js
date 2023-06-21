import axios from "axios";
const API_URL = 'https://tiny-tan-bream-belt.cyclic.app/api/users/'
//registrar usuario
const register = async(userData)=>{
    const response = await axios.post(API_URL,userData)
    if(response.data){
        return response.data
    }
}

const authService = {
    register
}
export default authService