import axios from 'axios';

export const axiosJWT = axios.create()


const createLike = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/like/create`, data)
    return res.data
}

const updateLike = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/like/update/${id}`, data)
    return res.data
}

const getAllLike = async (limit, page, filter, search) => {
    let res = {};
    if (search && filter && search.length > 0) {
        res = await axios.get(`http://localhost:3000/api/like/get-all?limit=${limit}&page=${page}&filter=${filter}&filter=${search}`)
    } else {
        res = await axios.get(`http://localhost:3000/api/like/get-all?limit=${limit}&page=${page}`)
    }
    console.log('res', limit, page, filter, search)
    return res.data
}


export {
    createPodcast,
    updatePodcast,
    getAllPodcast
}