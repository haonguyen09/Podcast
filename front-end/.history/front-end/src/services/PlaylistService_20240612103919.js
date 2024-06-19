import axios from 'axios';

export const axiosJWT = axios.create()


const createPlaylist = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/playlist/create`, data)
    return res.data
}

const updatePlaylist = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/playlist/update/${id}`, data)
    return res.data
}

const getAllPlaylist = async (limit, page, filter, search) => {
    let res = {};
    if (search && filter && search.length > 0) {
        res = await axios.get(`http://localhost:3000/api/playlist/get-all?limit=${limit}&page=${page}&filter=${filter}&filter=${search}`)
    } else {
        res = await axios.get(`http://localhost:3000/api/playlist/get-all?limit=${limit}&page=${page}`)
    }
    console.log('res', limit, page, filter, search)
    return res.data
}


export {
    createPlaylist,
    updatePlaylist,
    getAllPlaylist
}