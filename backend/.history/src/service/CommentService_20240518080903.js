const Comment = require('../model/CommentModel');

const createComment = (newComment) => {
    // console.log("newComment",newComment)
    return new Promise(async (resolve, reject) => {
        if (!newComment) {
            return reject(new TypeError("New comment data is required"));
        }
        if (newComment) {

            try {
                const response = await Comment.create(newComment)
                if (response) {
                    resolve({
                        status: "OK",
                        message: "Create comment successful",
                        data: response
                    })
                }
            } catch (error) {
                reject({
                    status: "ERR",
                    message: "Create comment failed!",
                    error: error
                })
            }
        }
    })
}


const updateComment = (id, data) => {
    return new Promise(async (resolve, reject) => {

        const { userId, podcastId, content } = data;
        const commentId = new mongoose.Types.ObjectId(id);


        try {
            const existingUserByContent = await Comment.findOne({ content, _id: { $ne: commentId } });

            if (existingUserByContent) {
                return resolve({
                    status: "ERR",
                    message: "Content already exists!"
                });
            }

            const response = await Comment.findByIdAndUpdate(commentId, data, { new: true });

            if (response) {
                resolve({
                    status: "OK",
                    message: "Update comment successful",
                    data: response
                });
            } else {
                resolve({
                    status: "ERR",
                    message: "Comment not found!"
                });
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "Update comment failed!",
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
        if (checkUser === null) {
            resolve({
                status: 'OK',
                message: 'The user is not defined'
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
                status: "OK",
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
        if (checkUser === null) {
            resolve({
                status: 'OK',
                message: 'The user is not defined'
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
    createUser,
    updateUser,
    getDetailsUser,
    deleteUser,
    getAllUser
}