const UserService = require('../service/UserService')


const createUser = async (req, res) => {
    const { name, email, password, role } = req.body
    
    try {
        const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isCheckEmail = reg.test(email);

        if (!name || !email || !password || !role) {
            return res.status(404).json({
                status: "ERR",
                message: "All field is required!"
            })
        } else if (isCheckEmail) {
            return res.status(404).json({
                status: "ERR",
                message: "The email is invalid!"
            })
        }
        const response = UserService.createUser(req.body)

        return res.status(404).json(response)
        
    } catch (error) {
        console.log("error controller", error)
        console.error(error)
    }

    
}

const getAllUser = (req, res) => {

}

module.exports = {
    createUser,
    getAllUser
}