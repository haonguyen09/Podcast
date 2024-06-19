
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
        }
        
    } catch (error) {
        
    }

    
}

const getAllUser = (req, res) => {

}

module.exports = {
    createUser,
    getAllUser
}