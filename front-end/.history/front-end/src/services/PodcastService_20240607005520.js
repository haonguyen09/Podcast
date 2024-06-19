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

const getAllPodcast = async (limit, page, search) => {
    let res = {};
    if (search && search.length > 0) {
        res = await axios.get(`http://localhost:3000/api/podcast/get-all?limit=${limit}&page=${page}&filter=name&filter=${search}`)
    } else {
        res = await axios.get(`http://localhost:3000/api/podcast/get-all?limit=${limit}&page=${page}`)
    }
    return res.data
}


export {
    createPodcast,
    updatePodcast,
    getAllPodcast
}