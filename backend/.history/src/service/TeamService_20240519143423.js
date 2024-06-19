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

            const response = await Team.findByIdAndUpdate(TeamId, data, { new: true });

            if (response) {
                resolve({
                    status: "OK",
                    message: "Update team successful",
                    data: response
                });
            } else {
                reject({
                    status: "ERR",
                    message: "Team not found!"
                });
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "Update team failed!",
                error: error
            });
        }
    });
};


const getDetailsTeam  = (id) => {
    return new Promise( async (resolve, reject) => {
    
        const teamId = new mongoose.Types.ObjectId(id)

        const checkTeam = await Comment.findOne({
            _id:teamId
        })
        if (!checkTeam) {
            reject({
                status: 'ERR',
                message: 'The team not found!'
            })
        }

        try {
            const response = await Team.findById(teamId)
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

const deleteTeam = (id) => {
    return new Promise(async (resolve, reject) => {
        
        const teamId = new mongoose.Types.ObjectId(id)

        const checkTeam = await Team.findOne({
            _id:teamId
        })
        if (!checkTeam) {
            reject({
                status: 'ERR',
                message: 'The team not found!'
            })
        }

        try {
            const response = await Team.findByIdAndDelete(teamId)
            if (response) {
                const updateUser = {
                    $pull: {
                        teams: teamId
                    }
                }
                await User.findByIdAndUpdate(response.userId, updateUser, {new: true})
                resolve({
                    status: "OK",
                    message: "Delete team successful"
                })
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "delete team failed!",
                error: error
            })
        }
    })
}


const getAllTeam = async (limit = 4, page = 0, filter) => {
        try {
            const totalTeam = await Team.countDocuments()
            const queryConditions = {}
            if (filter) {
                queryConditions[filter[0]] = { '$regex': filter[1], '$options': 'i' };
            }
            const response = await Team.find(queryConditions).limit(limit).skip(limit * page)
                                        .populate({ path: "userId" })
            if (response) {
                return{
                    status: "OK",
                    message: "Get all team successful",
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