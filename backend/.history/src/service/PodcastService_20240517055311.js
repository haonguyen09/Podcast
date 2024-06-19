const Podcast = require('../model/PodcastModel');
const { default: mongoose } = require('mongoose');

const createPodcast = (newPodcast, files) => {
    return new Promise(async (resolve, reject) => {
        if (!newPodcast) {
            return reject(new TypeError("New podcast data is required"));
        }
        if (newPodcast) {
            const { title, description, status, topicId } = newPodcast

            const checkPodcast = await Podcast.findOne({ title })
            if (checkPodcast !== null) {
                return resolve({
                    status: "ERR",
                    message: "Title already exists!"
                })
            } 
            try {
                const response = await Podcast.create(newPodcast)
                if (response) {
                    resolve({
                        status: "OK",
                        message: "Create podcast successful",
                        data: response
                    })
                }
            } catch (error) {
                reject({
                    status: "ERR",
                    message: "Create podcast failed!",
                    error: error
                })
            }
        }
    })
}


const updatePodcast = (id, data) => {
    // return new Promise(async (resolve, reject) => {
    //     if (!mongoose.Types.ObjectId.isValid(id)) {
    //         return resolve({
    //             status: "ERR",
    //             message: "Invalid user ID!"
    //         });
    //     }

    //     const userId = new mongoose.Types.ObjectId(id);
    //     const { email, name, ...updateData } = data;

    //     if (updateData.hasOwnProperty('password')) {
    //         // Hash the new password
    //         const hashedPassword = bcrypt.hashSync(updateData.password, 10);
    //         // Update the data object with the hashed password
    //         updateData.password = hashedPassword;
    //     }

    //     try {
    //         const existingUserByName = await User.findOne({ name, _id: { $ne: userId } });
    //         const existingUserByEmail = await User.findOne({ email, _id: { $ne: userId } });

    //         if (existingUserByName) {
    //             return resolve({
    //                 status: "ERR",
    //                 message: "Username already exists!"
    //             });
    //         } else if (existingUserByEmail) {
    //             return resolve({
    //                 status: "ERR",
    //                 message: "Email already exists!"
    //             });
    //         }

    //         const response = await User.findByIdAndUpdate(userId, updateData, { new: true });

    //         if (response) {
    //             resolve({
    //                 status: "OK",
    //                 message: "Update user successful",
    //                 data: response
    //             });
    //         } else {
    //             resolve({
    //                 status: "ERR",
    //                 message: "User not found!"
    //             });
    //         }
    //     } catch (error) {
    //         reject({
    //             status: "ERR",
    //             message: "Update user failed!",
    //             error: error
    //         });
    //     }
    // });
};


const getDetailsPodcast  = (id) => {
    // return new Promise( async (resolve, reject) => {
    //     if(!mongoose.Types.ObjectId.isValid(id)) {
    //         return resolve({
    //             status: "ERR",
    //             message: "userId is valid!"
    //         })
    //     }

    //     const userId = new mongoose.Types.ObjectId(id)

    //     const checkUser = await User.findOne({
    //         _id:userId
    //     })
    //     if (checkUser === null) {
    //         resolve({
    //             status: 'OK',
    //             message: 'The user is not defined'
    //         })
    //     }

    //     try {
    //         const response = await User.findById(userId)
    //         if (response) {
    //             resolve({
    //                 status: "OK",
    //                 message: "Get details successful!",
    //                 data: response
    //             })
    //         }
    //     } catch (error) {
    //         reject({
    //             status: "OK",
    //             message: "Get details failed!",
    //             error: error
    //         })
    //     }
    // })
}

const deletePodcast = (id) => {
    // return new Promise( async (resolve, reject) => {
    //     if(!mongoose.Types.ObjectId.isValid(id)) {
    //         return resolve({
    //             status: "ERR",
    //             message: "userId is valid!"
    //         })
    //     }

    //     const userId = new mongoose.Types.ObjectId(id)

    //     const checkUser = await User.findOne({
    //         _id:userId
    //     })
    //     if (checkUser === null) {
    //         resolve({
    //             status: 'OK',
    //             message: 'The user is not defined'
    //         })
    //     }

    //     try {
    //         const response = await User.findByIdAndDelete(userId)
    //         if (response) {
    //             resolve({
    //                 status: "OK",
    //                 message: "Delete user successful"
    //             })
    //         }
    //     } catch (error) {
    //         reject({
    //             status: "ERR",
    //             message: "delete user failed!",
    //             error: error
    //         })
    //     }
    // })
}


const getAllPodcast = async (limit = 4, page = 0, filter) => {
        // try {
        //     const totalUser = await User.countDocuments()
        //     const queryConditions = {}
        //     if (filter) {
        //         queryConditions[filter[0]] = { '$regex': filter[1], '$options': 'i' };
        //     }
        //     const response = await User.find(queryConditions).limit(limit).skip(limit * page)
        //                                 .populate({ path: "followerId" })
        //                                 .populate({ path: "followingId" })
        //                                 .populate({ path: "teams" })
        //     if (response) {
        //         return{
        //             status: "OK",
        //             message: "Get all user successful",
        //             data: response,
        //             totals: totalUser,
        //             page: Number(page) + 1,
        //             totalPage: Math.ceil(totalUser / limit)
        //         }
        //     }
        // } catch (e) {
        //     return({
        //         status: "ERR",
        //         message: "get all user failed!",
        //         error: e
        //     })
        // }
}


module.exports = {
    createPodcast,
    updatePodcast,
    getDetailsPodcast,
    deletePodcast,
    getAllPodcast
}