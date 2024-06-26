const UserService = require('../service/UserService')


const createUser = async (req, res) => {
    const { title, description, status, topicId } = req.body
    console.log("data", req.file)
    
    try {

        if (!name || !email || !password || !role) {
            return res.status(404).json({
                status: "ERR",
                message: "All field is required!"
            })
        } else if (!isCheckEmail) {
            return res.status(404).json({
                status: "ERR",
                message: "The email is invalid!"
            })
        }
        const response = await UserService.createUser(req.body)

        return res.status(200).json(response)
        
    } catch (error) {
        console.log("error controller", error)
        console.error(error)
    }

    
}


const updateUser = async (req, res) => {
    // const userId = req.params.id
    // const {email, ...data} = req.body
    // if (!userId || !data) {
    //     return res.status(404).json({
    //         status: "ERR",
    //         message: "All fields is required!"
    //     })
    // }

    // if (email) {
    //     const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //     const isCheckEmail = reg.test(email);
    
    //     if (!isCheckEmail) {
    //         return res.status(404).json({
    //             status: "ERR",
    //             message: "The email is invalid!"
    //         })
    //     }
    // }

    // try {
    //     const response = await UserService.updateUser(userId, data)
    //     if (response) {
    //         return res.status(200).json(response)
    //     }
    // } catch (error) {
    //     console.error(error)
    // }
}

const getDetailsUser = async (req, res) => {
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

const deleteUser = async (req, res) => {
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


const getAllUser = async (req, res) => {
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
    createUser,
    updateUser,
    getDetailsUser,
    deleteUser,
    getAllUser
}