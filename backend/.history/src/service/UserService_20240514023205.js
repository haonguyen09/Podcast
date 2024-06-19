const User = require('../model/UserModel')
const bcrypt = require('bcrypt');

const createUser = (newUser) => {
    return new Promise((resolve, reject) => {
        if (newUser) {
            const { name, email, password, role } = newUser

            const passwordHash = bcrypt.hashSync(password, 10)

            const checkUser = User.find({ name })
            if (checkUser === null) {
                resolve.status(404).json({
                    status: "ERR",
                    message: "User is not defined!"
                })
            }
            try {
                const response = User.create({
                    name,
                    email,
                    password: passwordHash,
                    role
                })
                resolve.status(200).json({
                    status: "OK",
                    message: "create user successful",
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