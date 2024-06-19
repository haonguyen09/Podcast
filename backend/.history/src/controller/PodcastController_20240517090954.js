const PodcastService = require('../service/PodcastService')
const { default: mongoose } = require('mongoose');


const createPodcast = async (req, res) => {
    const { title, description, status, topicId } = req.body
    const files = req.files
    // console.log("data body", req.body)
    // console.log("data file", req.files)
    
    try {

        if (!title || !description || !status || !topicId) {
            return res.status(404).json({
                status: "ERR",
                message: "All field is required!"
            })
        } 

        if (!mongoose.Types.ObjectId.isValid(topicId)) {
            return res.status(404).json({
                status: "ERR",
                message: "Invalid topic ID!"
            });
        }

        const response = await PodcastService.createPodcast(req.body, files)

        return res.status(200).json(response)
        
    } catch (error) {
        console.log("error controller", error)
        console.error(error)
    }

    
}


const updatePodcast = async (req, res) => {
    const podcastId = req.params.id
    const { ...data } = req.body
    
    if (!podcastId || !data) {
        return res.status(404).json({
            status: "ERR",
            message: "All fields is required!"
        })
    }
    
    if (!mongoose.Types.ObjectId.isValid(podcastId)) {
        return res.status(404).json({
            status: "ERR",
            message: "Invalid podcast ID!"
        });
    }
    

    try {
        const response = await UserService.updateUser(userId, data)
        if (response) {
            return res.status(200).json(response)
        }
    } catch (error) {
        console.error(error)
    }
}

const getDetailsPodcast = async (req, res) => {
    // const userId = req.params.id
    // if (userId) {
    //     try {
    //         const response = await UserService.getDetailsUser(userId)
    //         if (response) {
    //             return res.status(200).json(response)
    //         }
    //     } catch (error) {
    //         return res.status(404).json({
    //             message: e
    //         })
    //     }
    // } else {
    //     return res.status(404).json({
    //         status: 'ERR',
    //         message: 'The userId is required'
    //     })
    // }
}

const deletePodcast = async (req, res) => {
    // const userId = req.params.id
    // if (userId) {
    //     try {
    //         const response = await UserService.deleteUser(userId)
    //         if (response) {
    //             return res.status(200).json(response)
    //         }
    //     } catch (error) {
    //         return res.status(404).json({
    //             message: e
    //         })
    //     }
    // } else {
    //     return res.status(404).json({
    //         status: 'ERR',
    //         message: 'The userId is required'
    //     })
    // }
}


const getAllPodcast = async (req, res) => {
    // const { limit, page, filter } = req.query
    // try {
    //     const response = await UserService.getAllUser(Number(limit), Number(page), filter)
    //     if (response) {
    //         return res.status(200).json(response)
    //     }
    // } catch (error) {
    //     console.error(error)
    // }
}

module.exports = {
    createPodcast,
    updatePodcast,
    getDetailsPodcast,
    deletePodcast,
    getAllPodcast
}