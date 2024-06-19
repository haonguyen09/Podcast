const createUser = (newUser) => {
    return Promise((resolve, reject) => {
        if (newUser) {
            const {name, email, password, role} = newUser
            const checkUser = User.find({ name })
            if (checkUser === null) {
                resolve.status(404).json({
                    status: "ERR",
                    message: "User is not defined!"
                })
            }
        }
    })
}


module.exports = {
    createUser
}