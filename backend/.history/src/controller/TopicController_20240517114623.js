const TopicService = require('../service/TopicService')
const { default: mongoose } = require('mongoose');


const createTopic = async (req, res) => {
    const { name, podcastId } = req.body
    const files = req.files
    // console.log("data body", req.body)
    // console.log("data file", req.files)
    
    try {

        if (!name || !podcastId) {
            return res.status(404).json({
                status: "ERR",
                message: "All field is required!"
            })
        } 

        if (!mongoose.Types.ObjectId.isValid(podcastId)) {
            return res.status(404).json({
                status: "ERR",
                message: "Invalid podcast ID!"
            });
        }

        const response = await TopicService.createTopic(req.body, files)

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
        const response = await PodcastService.updatePodcast(podcastId, data, files)
        if (response) {
            return res.status(200).json(response)
        }
    } catch (error) {
        console.error(error)
    }
}

const getDetailsPodcast = async (req, res) => {
    const podcastId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(podcastId)) {
        return res.status(404).json({
            status: "ERR",
            message: "Invalid podcast ID!"
        });
    }

    if (podcastId) {
        try {
            const response = await PodcastService.getDetailsPodcast(podcastId)
            if (response) {
                return res.status(200).json(response)
            }
        } catch (error) {
            return res.status(404).json({
                message: e
            })
        }
    } else {
        return res.status(404).json({
            status: 'ERR',
            message: 'The podcastId is required'
        })
    }
}

const deletePodcast = async (req, res) => {
    const podcastId = req.params.id
    if (!mongoose.Types.ObjectId.isValid(podcastId)) {
        return res.status(404).json({
            status: "ERR",
            message: "Invalid podcast ID!"
        });
    }
    if (podcastId) {
        try {
            const response = await PodcastService.deletePodcast(podcastId)
            if (response) {
                return res.status(200).json(response)
            }
        } catch (error) {
            return res.status(404).json({
                message: e
            })
        }
    } else {
        return res.status(404).json({
            status: 'ERR',
            message: 'The podcastId is required'
        })
    }
}


const getAllPodcast = async (req, res) => {
    const { limit, page, filter } = req.query
    try {
        const response = await PodcastService.getAllPodcast(Number(limit), Number(page), filter)
        if (response) {
            return res.status(200).json(response)
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createPodcast,
    updatePodcast,
    getDetailsPodcast,
    deletePodcast,
    getAllPodcast
}