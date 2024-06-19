const bcrypt = require('bcrypt');
const User = require('../model/UserModel');

const createUser = (newUser) => {
    console.log("newUser",newUser)
    return new Promise( async (resolve, reject) => {
        if (newUser) {
            const { name, email, password, role } = newUser

            const passwordHash = bcrypt.hashSync(password, 10)

            const checkUser = await User.find({ name, email })
            // console.log("checkUser",checkUser)
            if (checkUser === null) {
                return resolve({
                    status: "ERR",
                    message: "User is not defined!"
                })
            } 
            try {
                const response = await User.create({
                    name,
                    email,
                    password: passwordHash,
                    role
                })
                resolve({
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