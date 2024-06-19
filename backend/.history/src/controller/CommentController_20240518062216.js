const CommentService = require('../service/CommentService')


const createComment = async (req, res) => {
    const { content, userId } = req.body
    
    try {

        if (!content || !userId) {
            return res.status(404).json({
                status: "ERR",
                message: "All field is required!"
            })
        } 

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(404).json({
                status: "ERR",
                message: "Invalid user ID!"
            });
        }

        const response = await CommentService.createComment(req.body)

        return res.status(200).json(response)
        
    } catch (error) {
        console.log("error controller", error)
        console.error(error)
    }

    
}


const updateComment = async (req, res) => {
    const commentId = req.params.id
    const {...data} = req.body
    if (!commentId || !data) {
        return res.status(404).json({
            status: "ERR",
            message: "All fields is required!"
        })
    }

    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(404).json({
            status: "ERR",
            message: "Invalid comment ID!"
        });
    }


    try {
        const response = await CommentService.updateComment(commentId, data)
        if (response) {
            return res.status(200).json(response)
        }
    } catch (error) {
        console.error(error)
    }
}

const getDetailsComment = async (req, res) => {
    const commentId = req.params.id

    if(!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(404).json({
            status: "ERR",
            message: "commentId is valid!"
        })
    }

    if (userId) {
        try {
            const response = await CommentService.getDetailsComment(commentId)
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
            message: 'The commentId is required'
        })
    }
}

const deleteComment = async (req, res) => {
    const commentId = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            status: "ERR",
            message: "commentId is valid!"
        })
    }


    if (userId) {
        try {
            const response = await CommentService.deleteUser(userId)
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
            message: 'The userId is required'
        })
    }
}


const getAllUser = async (req, res) => {
    const { limit, page, filter } = req.query
    try {
        const response = await CommentService.getAllUser(Number(limit), Number(page), filter)
        if (response) {
            return res.status(200).json(response)
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createUser,
    updateUser,
    getDetailsUser,
    deleteUser,
    getAllUser
}