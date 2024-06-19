const Follower = require('../model/FollowerModel');
const User = require('../model/UserModel');
const { default: mongoose } = require('mongoose');


const createFollower = (newFollower) => {
    // console.log("newFollower",newFollower)
    return new Promise(async (resolve, reject) => {
        if (!newFollower) {
            return reject(new TypeError("New follower data is required"));
        }

        const { name, userId, members } = newFollower

        const existingFollower = await Follower.findOne({ name })
            if (existingFollower) {
                return reject({
                    status: "ERR",
                    message: "Name already exists!"
                })
            } 

        newFollower.members.map(member => new mongoose.Types.ObjectId(member))

        if (newFollower) {

            try {
                const response = await Follower.create(newFollower)
                if (response) {
                    
                    const updateUser = {
                        $addToSet: {followers: response._id}
                    }

                    await User.findByIdAndUpdate(response.userId, updateUser, {new: true})

                    resolve({
                        status: "OK",
                        message: "Create follower successful",
                        data: response
                    })
                }
            } catch (error) {
                reject({
                    status: "ERR",
                    message: "Create follower failed!",
                    error: error
                })
            }
        }
    })
}


const updateFollower = (id, data) => {
    return new Promise(async (resolve, reject) => {

        const { name, userId, members } = data;
        const followerId = new mongoose.Types.ObjectId(id);


        try {
            const existingUserByName = await Follower.findOne({ name, _id: { $ne: followerId } });

            if (existingUserByName) {
                return reject({
                    status: "ERR",
                    message: "Name already exists!"
                });
            }

            const response = await Follower.findByIdAndUpdate(FollowerId, data, { new: true });

            if (response) {
                resolve({
                    status: "OK",
                    message: "Update follower successful",
                    data: response
                });
            } else {
                reject({
                    status: "ERR",
                    message: "Follower not found!"
                });
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "Update follower failed!",
                error: error
            });
        }
    });
};


const getDetailsFollower  = (id) => {
    return new Promise( async (resolve, reject) => {
    
        const followerId = new mongoose.Types.ObjectId(id)

        const checkFollower = await Comment.findOne({
            _id:followerId
        })
        if (!checkFollower) {
            reject({
                status: 'ERR',
                message: 'The follower not found!'
            })
        }

        try {
            const response = await Follower.findById(followerId)
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

const deleteFollower = (id) => {
    return new Promise(async (resolve, reject) => {
        
        const followerId = new mongoose.Types.ObjectId(id)

        const checkFollower = await Follower.findOne({
            _id:followerId
        })
        if (!checkFollower) {
            reject({
                status: 'ERR',
                message: 'The follower not found!'
            })
        }

        try {
            const response = await Follower.findByIdAndDelete(followerId)
            if (response) {
                const updateUser = {
                    $pull: {
                        followers: followerId
                    }
                }
                await User.findByIdAndUpdate(response.userId, updateUser, {new: true})
                resolve({
                    status: "OK",
                    message: "Delete follower successful"
                })
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "delete follower failed!",
                error: error
            })
        }
    })
}


const getAllFollower = async (limit = 4, page = 0, filter) => {
        try {
            const totalFollower = await Follower.countDocuments()
            const queryConditions = {}
            if (filter) {
                queryConditions[filter[0]] = { '$regex': filter[1], '$options': 'i' };
            }
            const response = await Follower.find(queryConditions).limit(limit).skip(limit * page)
                                        .populate({ path: "userId" })
            if (response) {
                return{
                    status: "OK",
                    message: "Get all follower successful",
                    data: response,
                    totals: totalFollower,
                    page: Number(page) + 1,
                    totalPage: Math.ceil(totalFollower / limit)
                }
            }
        } catch (e) {
            return({
                status: "ERR",
                message: "get all follower failed!",
                error: e
            })
        }
}


module.exports = {
    createFollower,
    updateFollower,
    getDetailsFollower,
    deleteFollower,
    getAllFollower
}