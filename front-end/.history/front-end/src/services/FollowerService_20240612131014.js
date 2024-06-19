import axios from 'axios';

export const axiosJWT = axios.create()


const createFollower = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/follower/create`, data)
    return res.data
}

const updateFollower = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/follower/update/${id}`, data)
    return res.data
}

const getAllFollower = async (limit, page, search) => {
    let res = {};
    if (search.length > 0) {
        res = await axios.get(`http://localhost:3000/api/follower/get-all?limit=${limit}&page=${page}&filter=email&filter=${search}`)
    } else {
        res = await axios.get(`http://localhost:3000/api/follower/get-all?limit=${limit}&page=${page}`)
    }


    return res.data
}

export {
    createFollower,
    updateFollower,
    getAllFollower
}