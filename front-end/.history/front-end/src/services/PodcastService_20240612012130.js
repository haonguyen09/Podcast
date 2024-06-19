import axios from 'axios';

export const axiosJWT = axios.create()


const createPodcast = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/podcast/create`, data)
    return res.data
}

const updatePodcast = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/podcast/update/${id}`, data)
    return res.data
}

const getAllPodcast = async (limit, page, filter, search) => {
    let res = {};
    if (search && filter && search.length > 0) {
        res = await axios.get(`http://localhost:3000/api/podcast/get-all?limit=${limit}&page=${page}&filter=${filter}&filter=${search}`)
    } else {
        res = await axios.get(`http://localhost:3000/api/podcast/get-all?limit=${limit}&page=${page}`)
    }
    console.log('res', limit, page, filter, search)
    return res.data
}


export {
    createPodcast,
    updatePodcast,
    getAllPodcast
}