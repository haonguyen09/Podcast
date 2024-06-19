const bcrypt = require('bcrypt');
const User = require('../model/UserModel');

const createUser = (newUser) => {
    // console.log("newUser",newUser)
    return new Promise(async (resolve, reject) => {
        if (!newUser) {
            return reject(new TypeError("New user data is required"));
        }
        if (newUser) {
            const { name, email, password, role } = newUser

            const passwordHash = bcrypt.hashSync(password, 10)

            const checkUser = await User.findOne({ name })
            const checkEmail = await User.findOne({ email })
            // console.log("checkUser",checkUser)
            if (checkUser !== null) {
                return resolve({
                    status: "ERR",
                    message: "Username already exists!"
                })
            } else if (checkEmail !== null) {
                return resolve({
                    status: "ERR",
                    message: "Email already exists!"
                })
            }
            try {
                const response = await User.create({
                    name,
                    email,
                    password: passwordHash,
                    role
                })
                if (response) {
                    resolve({
                        status: "OK",
                        message: "create user successful",
                        data: response
                    })
                }
            } catch (error) {
                reject({
                    status: "ERR",
                    message: "create user failed!",
                    error: error
                })
            }
        }
    })
}


const updateUser = (id, data) => {

}


module.exports = {
    createUser,
    updateUser
}