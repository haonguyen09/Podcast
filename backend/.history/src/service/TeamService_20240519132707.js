const Team = require('../model/TeamModel');
const User = require('../model/UserModel');
const { default: mongoose } = require('mongoose');



const createTeam = (newTeam) => {
    // console.log("newTeam",newTeam)
    return new Promise(async (resolve, reject) => {
        if (!newTeam) {
            return reject(new TypeError("New team data is required"));
        }

        const { name, userId, members } = newTeam

        newTeam.members.map(member => new mongoose.Types.ObjectId(member))

        if (newTeam) {

            try {
                const response = await Team.create(newTeam)
                if (response) {
                    
                    const updateUser = {
                        $addToSet: {teams: response._id}
                    }

                    await User.findByIdAndUpdate(response.userId, updateUser, {new: true})

                    resolve({
                        status: "OK",
                        message: "Create team successful",
                        data: response
                    })
                }
            } catch (error) {
                reject({
                    status: "ERR",
                    message: "Create team failed!",
                    error: error
                })
            }
        }
    })
}


const updateTeam = (id, data) => {
    return new Promise(async (resolve, reject) => {

        const { name, userId, members } = data;
        const teamId = new mongoose.Types.ObjectId(id);


        try {
            const existingUserByName = await Team.findOne({ name, _id: { $ne: teamId } });

            if (existingUserByName) {
                return reject({
                    status: "ERR",
                    message: "Name already exists!"
                });
            }

            const response = await Team.findByIdAndUpdate(commentId, data, { new: true });

            if (response) {
                resolve({
                    status: "OK",
                    message: "Update comment successful",
                    data: response
                });
            } else {
                reject({
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


const getDetailsComment  = (id) => {
    return new Promise( async (resolve, reject) => {
    
        const commentId = new mongoose.Types.ObjectId(id)

        const checkComment = await Comment.findOne({
            _id:commentId
        })
        if (!checkComment) {
            reject({
                status: 'ERR',
                message: 'The comment not found!'
            })
        }

        try {
            const response = await Comment.findById(commentId)
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

const deleteComment = (id) => {
    return new Promise(async (resolve, reject) => {
        
        const commentId = new mongoose.Types.ObjectId(id)

        const checkComment = await Comment.findOne({
            _id:commentId
        })
        if (!checkComment) {
            reject({
                status: 'ERR',
                message: 'The comment not found!'
            })
        }

        try {
            const response = await Comment.findByIdAndDelete(commentId)
            if (response) {
                const updatePodcast = {
                    $pull: {
                        comments: commentId
                    }
                }
                await Podcast.findByIdAndUpdate(response.podcastId, updatePodcast, {new: true})
                resolve({
                    status: "OK",
                    message: "Delete comment successful"
                })
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "delete comment failed!",
                error: error
            })
        }
    })
}


const getAllComment = async (limit = 4, page = 0, filter) => {
        try {
            const totalComment = await Comment.countDocuments()
            const queryConditions = {}
            if (filter) {
                queryConditions[filter[0]] = { '$regex': filter[1], '$options': 'i' };
            }
            const response = await Comment.find(queryConditions).limit(limit).skip(limit * page)
                                        .populate({ path: "userId" })
                                        .populate({ path: "podcastId" })
            if (response) {
                return{
                    status: "OK",
                    message: "Get all comment successful",
                    data: response,
                    totals: totalComment,
                    page: Number(page) + 1,
                    totalPage: Math.ceil(totalComment / limit)
                }
            }
        } catch (e) {
            return({
                status: "ERR",
                message: "get all comment failed!",
                error: e
            })
        }
}


module.exports = {
    createComment,
    updateComment,
    getDetailsComment,
    deleteComment,
    getAllComment
}