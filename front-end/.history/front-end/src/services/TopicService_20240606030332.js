import axios from 'axios';

export const axiosJWT = axios.create()


const createTopic = async (data) => {
    const res = await axios.post(`${process.env.API_URL}/topic/create`, data)
    return res.data
}

const updateTopic = async (data) => {
    const res = await axios.post(`${process.env.API_URL}/topic/create`, data)
    return res.data
}

const getAllTopic = async (limit, page, search) => {
    let res = {};
    if (search.length > 0) {
        res = await axios.get(`http://localhost:3000/api/topic/get-all?limit=${limit}&page=${page}&filter=email&filter=${search}`)
        
    } else {
        res = await axios.get(`http://localhost:3000/api/topic/get-all?limit=${limit}&page=${page}`)
    }
    return res.data
}

getAllTopic(4, 1)

export {
    createTopic,
    updateTopic,
    getAllTopic
}