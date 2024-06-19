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

const getAllUser = async (limit, page, search) => {
    let res;
    if (search.length > 0) {
        res = await axios.get(`${process.env.API_URL}/user/get-all?limit=4&page=0&filter=email&filter=hao@gmail.com`)
    }

    return res.data
}

export {
    loginUser,
    createUser,
    getAllUser
}