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
            try {
                const response = User.create(newUser)
                resolve.status(200).json({
                    status: "ERR",
                    message: "User is not defined!",
                    data: response
                })
            } catch (error) {
                reject(error)
            }
        }
    })
}


module.exports = {
    createUser
}