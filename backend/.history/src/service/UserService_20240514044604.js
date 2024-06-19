const bcrypt = require('bcrypt');
const User = require('../model/UserModel');
const { default: mongoose } = require('mongoose');

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
                        message: "Create user successful",
                        data: response
                    })
                }
            } catch (error) {
                reject({
                    status: "ERR",
                    message: "Create user failed!",
                    error: error
                })
            }
        }
    })
}


const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        const userId = new mongoose.Types.ObjectId(id)
        const { email, name, ...data} = dataUpdate
        if (!userId) {
            return resolve({
                status: "ERR",
                message: "userId is not defined!"
            })
        }

        const checkUser = await User.findOne({ name })
        const checkEmail = await User.findOne({ email })
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
            const response = await User.findByIdAndUpdate(userId, dataUpdate) 
            if (response) {
                resolve({
                    status: "OK",
                    message: "Update user successful",
                    data: response
                })
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "Update user failed!",
                error: error
            })
        }
    })
}


module.exports = {
    createUser,
    updateUser
}