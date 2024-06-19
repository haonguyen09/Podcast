import axios from 'axios';

export const axiosJWT = axios.create()


const createFollowing = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/following/create`, data)
    return res.data
}

const updateFollowing = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/following/update/${id}`, data)
    return res.data
}

const getAllFollowing = async (limit, page, search) => {
    let res = {};
    if (search.length > 0) {
        res = await axios.get(`http://localhost:3000/api/following/get-all?limit=${limit}&page=${page}&filter=email&filter=${search}`)
    } else {
        res = await axios.get(`http://localhost:3000/api/following/get-all?limit=${limit}&page=${page}`)
    }


    return res.data
}

export {
    createFollowing,
    updateFollowing,
    getAllFollowing
}