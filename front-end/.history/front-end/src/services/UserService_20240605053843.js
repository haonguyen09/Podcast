import axios from 'axios';

export const axiosJWT = axios.create()

const loginUser = async (data) => {
    const res = await axios.post(`${process.env.API_URL}/user/login`, data)
    return res.data
}

const createUser = async (data) => {
    const res = await axios.post(`${process.env.API_URL}/user/create`, data)
    return res.data
}

export {
    loginUser,
    createUser
}