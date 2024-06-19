import axios from 'axios';

export const axiosJWT = axios.create()

const loginUser = async (data) => {
    const res = await axios.post(`${process.env.API_URL}/user/login`, data)
    return res.data
}

const createUser = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/user/create`, data)
    return res.data
}

const getAllUser = async (limit, page, search) => {
    let res = {};
    if (search.length > 0) {
        res = await axios.get(`${process.env.API_URL}/user/get-all?limit=${limit}&page=${page}&filter=email&filter=${search}`)
    } else {
        res = await axios.get(`${process.env.API_URL}/user/get-all?limit=${limit}&page=${page}`)
    }


    return res.data
}

export {
    loginUser,
    createUser,
    getAllUser
}