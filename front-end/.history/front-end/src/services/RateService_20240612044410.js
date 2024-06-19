import axios from 'axios';

export const axiosJWT = axios.create()


const createRate = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/rate/create`, data)
    return res.data
}

const updateRate = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/rate/update/${id}`, data)
    return res.data
}

const getAllRate = async (limit, page, filter, search) => {
    let res = {};
    if (search && filter && search.length > 0) {
        res = await axios.get(`http://localhost:3000/api/rate/get-all?limit=${limit}&page=${page}&filter=${filter}&filter=${search}`)
    } else {
        res = await axios.get(`http://localhost:3000/api/rate/get-all?limit=${limit}&page=${page}`)
    }
    console.log('res', limit, page, filter, search)
    return res.data
}


export {
    createRate,
    updateRate,
    getAllRate
}