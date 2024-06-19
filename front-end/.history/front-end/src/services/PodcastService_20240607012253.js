import axios from 'axios';

export const axiosJWT = axios.create()


const createPodcast = async (data) => {
    const res = await axios.post(`${process.env.API_URL}/podcast/create`, data)
    return res.data
}

const updatePodcast = async (data) => {
    const res = await axios.post(`${process.env.API_URL}/podcast/create`, data)
    return res.data
}

const getAllPodcast = async (limit, page, filter, search) => {
    let res = {};
    if (search && filter && search.length > 0) {
        res = await axios.get(`${process.env.API_URL}/podcast/get-all?limit=${limit}&page=${page}&filter=${filter}&filter=${search}`)
    } else {
        res = await axios.get(`${process.env.API_URL}/podcast/get-all?limit=${limit}&page=${page}`)
    }
    return res.data
}


export {
    createPodcast,
    updatePodcast,
    getAllPodcast
}