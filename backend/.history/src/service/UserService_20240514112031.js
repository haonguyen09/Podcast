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
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return resolve({
                status: "ERR",
                message: "Invalid user ID!"
            });
        }

        const userId = new mongoose.Types.ObjectId(id);
        const { email, name, ...updateData } = data;

        if (updateData.hasOwnProperty('password')) {
            // Hash the new password
            const hashedPassword = bcrypt.hashSync(updateData.password, 10);
            // Update the data object with the hashed password
            updateData.password = hashedPassword;
        }

        try {
            const existingUserByName = await User.findOne({ name, _id: { $ne: userId } });
            const existingUserByEmail = await User.findOne({ email, _id: { $ne: userId } });

            if (existingUserByName) {
                return resolve({
                    status: "ERR",
                    message: "Username already exists!"
                });
            } else if (existingUserByEmail) {
                return resolve({
                    status: "ERR",
                    message: "Email already exists!"
                });
            }

            const response = await User.findByIdAndUpdate(userId, updateData, { new: true });

            if (response) {
                resolve({
                    status: "OK",
                    message: "Update user successful",
                    data: response
                });
            } else {
                resolve({
                    status: "ERR",
                    message: "User not found!"
                });
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "Update user failed!",
                error: error
            });
        }
    });
};


const getDetailsUser  = (id) => {
    return new Promise( async (resolve, reject) => {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return resolve({
                status: "ERR",
                message: "userId is valid!"
            })
        }

        const userId = new mongoose.Types.ObjectId(id)
        try {
            const response = await User.findById(userId)
            if (response) {
                resolve({
                    status: "OK",
                    message: "Get details successful!",
                    data: response
                })
            }
        } catch (error) {
            reject({
                status: "OK",
                message: "Get details failed!",
                error: error
            })
        }
    })
}

const deleteUser = (id) => {
    return new Promise( async (resolve, reject) => {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return resolve({
                status: "ERR",
                message: "userId is valid!"
            })
        }

        const userId = new mongoose.Types.ObjectId(id)
        try {
            const response = User.findByIdAndDelete(userId)
            if (response) {
                resolve({
                    status: "OK",
                    message: "Delete user successful"
                })
            }
        } catch (error) {
            
        }
    })
}



module.exports = {
    createUser,
    updateUser,
    getDetailsUser
}