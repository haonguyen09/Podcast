const bcrypt = require('bcrypt');
const User = require('../model/UserModel');
const Follower = require('../model/FollowerModel');
const Following = require('../model/FollowingModel');
const SuggestFollower = require('../model/SuggestFollowModel');
const { default: mongoose } = require('mongoose');
const { generateAccessToken, generateRefreshToken } = require('./jwtService');

const loginUser = (user) => {
    return new Promise(async (resolve, reject) => {
        if (!user) {
            return reject(new TypeError("User data is required"));
        }

        if (user) {
            const { email, password } = user

            const existingUserByEmail = await User.findOne({ email })
            if (!existingUserByEmail) {
                return reject({
                    status: "ERR",
                    message: "Email not exists!"
                })
            }

            const checkPassword = bcrypt.compareSync(password, existingUserByEmail.password)

            if (!checkPassword) {
                return reject({
                    status: "ERR",
                    message: "Password incorrect!"
                })
            }

            try {

                const access_token = await generateAccessToken(
                    {
                        id: existingUserByEmail.id,
                        role: existingUserByEmail.role
                    }
                )
                const refresh_token = await generateRefreshToken(
                    {
                        id: existingUserByEmail.id,
                        role: existingUserByEmail.role
                    }
                )

                
                    
                resolve({
                    status: "OK",
                    message: "Login user successful",
                    data: {
                        existingUserByEmail,
                        access_token,
                        refresh_token
                    }
                })
                
            } catch (error) {
                reject({
                    status: "ERR",
                    message: "Login user failed!",
                    error: error
                })
            }
        }
    } )
}

const createUser = (newUser, files) => {
    // console.log("newUser",newUser)
    return new Promise(async (resolve, reject) => {
        if (!newUser) {
            return reject(new TypeError("New user data is required"));
        }
        if (newUser) {
            const { firstName, lastName, email, password, role } = newUser

            let imagePath;

            const passwordHash = bcrypt.hashSync(password, 10)

            const existingUserByEmail = await User.findOne({ email })
            // console.log("existingUserByName",existingUserByName)
            if (existingUserByEmail) {
                return reject({
                    status: "ERR",
                    message: "Email already exists!"
                })
            }
            try {

                if (files.image && files.image[0]) {
                    imagePath = files.image[0].filename
                }

                const response = await User.create({
                    firstName,
                    lastName,
                    email,
                    password: passwordHash,
                    role,
                    image: imagePath
                })
                if (response) {
                    const suggestFollowId = await SuggestFollower.create({userId: response._id})
                    const followerId = await Follower.create({userId: response._id})
                    const followingId = await Following.create({userId: response._id})
                    await User.findByIdAndUpdate(response._id, {
                        suggestFollow: suggestFollowId._id,
                        followerId: followerId._id,
                        followingId: followingId._id,
                    })
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


const updateUser = (id, data, files) => {
    return new Promise(async (resolve, reject) => {

        const userId = new mongoose.Types.ObjectId(id);

        if (data.hasOwnProperty('password')) {
            // Hash the new password
            const hashedPassword = bcrypt.hashSync(data.password, 10);
            // Update the data object with the hashed password
            data.password = hashedPassword;
        }

        try {
            const existingUserByEmail = await User.findOne({ email: data.email, _id: { $ne: userId } });

            if (existingUserByEmail) {
                return reject({
                    status: "ERR",
                    message: "Email already exists!"
                });
            }

            let imagePath = existingPodcast.image
            if (files && files.image && files.image[0]) {
                imagePath = files.image[0].originalname
            }

            const response = await User.findByIdAndUpdate(userId, data, { new: true });

            if (response) {
                resolve({
                    status: "OK",
                    message: "Update user successful",
                    data: response
                });
            } else {
                reject({
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
    
        const userId = new mongoose.Types.ObjectId(id)

        const checkUser = await User.findOne({
            _id:userId
        })
        if (!checkUser) {
            reject({
                status: 'ERR',
                message: 'The user not found!'
            })
        }

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
                status: "ERR",
                message: "Get details failed!",
                error: error
            })
        }
    })
}

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        
        const userId = new mongoose.Types.ObjectId(id)

        const checkUser = await User.findOne({
            _id:userId
        })
        if (!checkUser) {
            reject({
                status: 'ERR',
                message: 'The user not found!'
            })
        }

        try {
            const response = await User.findByIdAndDelete(userId)
            if (response) {
                resolve({
                    status: "OK",
                    message: "Delete user successful"
                })
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "delete user failed!",
                error: error
            })
        }
    })
}


const getAllUser = async (limit = 4, page = 0, filter) => {
        try {
            const totalUser = await User.countDocuments()
            const queryConditions = {}
            if (filter) {
                queryConditions[filter[0]] = { '$regex': filter[1], '$options': 'i' };
            }
            const response = await User.find(queryConditions).limit(limit).skip(limit * page)
                                        .populate({ path: "followerId" })
                                        .populate({ path: "followingId" })
                                        .populate({ path: "teams" })
            if (response) {
                return{
                    status: "OK",
                    message: "Get all user successful",
                    data: response,
                    totals: totalUser,
                    page: Number(page) + 1,
                    totalPage: Math.ceil(totalUser / limit)
                }
            }
        } catch (e) {
            return({
                status: "ERR",
                message: "get all user failed!",
                error: e
            })
        }
}


module.exports = {
    loginUser,
    createUser,
    updateUser,
    getDetailsUser,
    deleteUser,
    getAllUser
}