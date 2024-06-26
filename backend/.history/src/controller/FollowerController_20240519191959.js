const FollowerService = require('../service/FollowerService')
const { default: mongoose } = require('mongoose');


const createFollower = async (req, res) => {
    const { userId, followers } = req.body
    
    try {

        if (!userId || !Array(followers)) {
            return res.status(404).json({
                status: "ERR",
                message: "All field is required!"
            })
        } 

        if (!followers.every(follower => mongoose.Types.ObjectId.isValid(follower))) {
            throw new Error("Invalid user ID format in followers");
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error("Invalid user ID format");
        }

        const response = await FollowerService.createFollower(req.body)

        return res.status(200).json(response)
        
    } catch (error) {
        console.log("error controller", error)
        console.error(error)
    }

    
}


const updateFollower = async (req, res) => {
    const followerId = req.params.id
    const { userId, followers, ...data} = req.body
    if (!followerId || !Array(followers)) {
        return res.status(404).json({
            status: "ERR",
            message: "All fields is required!"
        })
    }

    
    if(!mongoose.Types.ObjectId.isValid(followerId)) {
        return res.status(404).json({
            status: "ERR",
            message: "Invalid followerId!"
        })
    }

    if (!followers.every(follower => mongoose.Types.ObjectId.isValid(follower))) {
        throw new Error("Invalid user ID format in followers");
    }

    if(userId && !mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(404).json({
            status: "ERR",
            message: "Invalid userId!"
        })
    }


    try {
        const updateData = {followers, ...data}
        const response = await FollowerService.updateTeam(commentId, updateData)
        if (response) {
            return res.status(200).json(response)
        }
    } catch (error) {
        console.error(error)
    }
}

const getDetailsTeam = async (req, res) => {
    const followerId = req.params.id

    if(!mongoose.Types.ObjectId.isValid(followerId)) {
        return res.status(404).json({
            status: "ERR",
            message: "teamId is valid!"
        })
    }

    if (teamId) {
        try {
            const response = await FollowerService.getDetailsTeam(commentId)
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
            message: 'The teamId is required'
        })
    }
}

const deleteTeam = async (req, res) => {
    const teamId = req.params.id

    if(!mongoose.Types.ObjectId.isValid(teamId)) {
        return res.status(404).json({
            status: "ERR",
            message: "teamId is valid!"
        })
    }


    if (teamId) {
        try {
            const response = await FollowerService.deleteTeam(teamId)
            if (response) {
                return res.status(200).json(response)
            }
        } catch (error) {
            return res.status(404).json({
                message: error
            })
        }
    } else {
        return res.status(404).json({
            status: 'ERR',
            message: 'The teamId is required'
        })
    }
}


const getAllTeam = async (req, res) => {
    const { limit, page, filter } = req.query
    try {
        const response = await FollowerService.getAllTeam(Number(limit), Number(page), filter)
        if (response) {
            return res.status(200).json(response)
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createTeam,
    updateTeam,
    getDetailsTeam,
    deleteTeam,
    getAllTeam
}