const Playlist = require('../model/PlaylistModel');
const Follower = require('../model/FollowerModel');
const { default: mongoose } = require('mongoose');


const createPlaylist = (newPlaylist, files) => {
    console.log("files",files)
    return new Promise(async (resolve, reject) => {
        if (!newPlaylist) {
            return reject(new TypeError("New playlist data is required"));
        }
        if (newPlaylist) {
            const { title, description, userId, podcasts } = newPlaylist

            let imagePath;

            const existingPlaylistByTitle = await Playlist.findOne({ title })
            // console.log("existingPlaylistByName",existingPlaylistByName)
            if (existingPlaylistByTitle) {
                return reject({
                    status: "ERR",
                    message: "Title already exists!"
                })
            }
            try {

                if (files.image && files.image[0]) {
                    imagePath = files.image[0].filename
                }

                const response = await Playlist.create({
                    title,
                    description,
                    userId,
                    podcasts,
                    image: imagePath
                })
                if (response) {
                    const updateUser = {
                        $addToSet: {playlists: response._id}
                    }

                    await User.findByIdAndUpdate(response.userId, updateUser, { new: true })
                    
                    resolve({
                        status: "OK",
                        message: "Create playlist successful",
                        data: response
                    })
                }
            } catch (error) {
                reject({
                    status: "ERR",
                    message: "Create playlist failed!",
                    error: error
                })
            }
        }
    })
}


const updatePlaylist = (id, data, files) => {
    return new Promise(async (resolve, reject) => {

        const playlistId = new mongoose.Types.ObjectId(id);

        try {
            const existingPlaylistByTitle = await Playlist.findOne({ title: data.title, _id: { $ne: playlistId } });

            if (existingPlaylistByTitle) {
                return reject({
                    status: "ERR",
                    message: "Title already exists!"
                });
            }
            const existingPlaylist = await Playlist.findById(playlistId);

            if (!existingPlaylist) {
                return {
                    status: 'ERR',
                    message: 'Playlist not found'
                };
            }

            let imagePath = existingPlaylist.avatar
            if (files && files.image && files.image[0]) {
                imagePath = files.image[0].originalname
            }

            const updateFields = {
                ...data,
                image: imagePath
            };

            const response = await Playlist.findByIdAndUpdate(playlistId, updateFields, { new: true });


            if (response) {
                resolve({
                    status: "OK",
                    message: "Update playlist successful",
                    data: response
                });
            } else {
                reject({
                    status: "ERR",
                    message: "Playlist not found!"
                });
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "Update playlist failed!",
                error: error
            });
        }
    });
};


const getDetailsPlaylist  = (id) => {
    return new Promise( async (resolve, reject) => {
    
        const playlistId = new mongoose.Types.ObjectId(id)

        const checkPlaylist = await Playlist.findOne({
            _id:playlistId
        })
        if (!checkPlaylist) {
            reject({
                status: 'ERR',
                message: 'The playlist not found!'
            })
        }

        try {
            const response = await Playlist.findById(playlistId)
                                        .populate({ path: "followerId", populate: { path: "followers" } })
                                        .populate({ path: "followingId", populate: { path: "followings"} })
                                        .populate(({path: "suggestFollow" , populate: { path: "suggestFollows"}}))
                                        .populate({path: "topics", populate: {path: "podcasts", populate: {path: "playlistId"}}})
                                        .populate({ path: "teams", populate: [{ path: "members" }, { path: "playlistId" }] })
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

const deletePlaylist = (id) => {
    return new Promise(async (resolve, reject) => {
        
        const playlistId = new mongoose.Types.ObjectId(id)

        const checkPlaylist = await Playlist.findOne({
            _id:playlistId
        })
        if (!checkPlaylist) {
            reject({
                status: 'ERR',
                message: 'The playlist not found!'
            })
        }

        try {
            const response = await Playlist.findByIdAndDelete(playlistId)
            if (response) {
                await Follower.findByIdAndDelete(response.followerId)
                await Following.findByIdAndDelete(response.followingId)
                await SuggestFollower.findByIdAndDelete(response.suggestFollow)
                resolve({
                    status: "OK",
                    message: "Delete playlist successful"
                })
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "delete playlist failed!",
                error: error
            })
        }
    })
}


const getAllPlaylist = async (limit = 4, page = 0, filter) => {
        try {
            const totalPlaylist = await Playlist.countDocuments()
            const queryConditions = {}
            if (filter) {
                queryConditions[filter[0]] = { '$regex': filter[1], '$options': 'i' };
            }
            const response = await Playlist.find(queryConditions).limit(limit).skip(limit * page)
                                        .populate({ path: "followerId" })
                                        .populate({ path: "followingId" })
                                        .populate({ path: "teams" })
            if (response) {
                return{
                    status: "OK",
                    message: "Get all playlist successful",
                    data: response,
                    totals: totalPlaylist,
                    page: Number(page) + 1,
                    totalPage: Math.ceil(totalPlaylist / limit)
                }
            }
        } catch (e) {
            return({
                status: "ERR",
                message: "get all playlist failed!",
                error: e
            })
        }
}


module.exports = {
    createPlaylist,
    updatePlaylist,
    getDetailsPlaylist,
    deletePlaylist,
    getAllPlaylist
}