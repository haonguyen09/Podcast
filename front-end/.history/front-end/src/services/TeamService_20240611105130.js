import axios from 'axios';

export const axiosJWT = axios.create()


const createTeam = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/team/create`, data)
    return res.data
}

const updateTeam = async (id, data) => {
    const res = await axios.post(`http://localhost:3000/api/team/update/${id}`, data)
    return res.data
}

const getAllTeam = async (limit, page, filter, search) => {
    let res = {};
    if (search && filter && search.length > 0) {
        res = await axios.get(`http://localhost:3000/api/team/get-all?limit=${limit}&page=${page}&filter=${filter}&filter=${search}`)
    } else {
        res = await axios.get(`http://localhost:3000/api/team/get-all?limit=${limit}&page=${page}`)
    }
    console.log('res', limit, page, filter, search)
    return res.data
}


export {
    createTeam,
    updateTeam,
    getAllTeam
}