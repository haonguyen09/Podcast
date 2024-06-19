import axios from 'axios';

export const axiosJWT = axios.create()

const loginUser = async (data) => {
    const res = await axios.post("http://localhost:3000/api/user/login", data)
    return res.data
}

const createUser = async (data) => {
    const res = await axios.post("http://localhost:3000/api/user/login", data)
    return res.data
}

export {
    loginUser,
    createUser
}