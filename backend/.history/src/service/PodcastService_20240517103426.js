const Podcast = require('../model/PodcastModel');
const { default: mongoose } = require('mongoose');

const createPodcast = (newPodcast, files) => {
    return new Promise(async (resolve, reject) => {
        if (!newPodcast) {
            return reject(new TypeError("New podcast data is required"));
        }
        if (newPodcast) {
            const { title, description, status, topicId } = newPodcast
            let imagePath, audioPath

            const existingPodcast = await Podcast.findOne({ title })
            if (existingPodcast) {
                return reject({
                    status: "ERR",
                    message: "Title already exists!"
                })
            } 
            console.log("filesService", files)
            try {
                if (files.image && files.image[0]) {
                    imagePath = files.image[0].originalname
                }
                if (files.audio && files.audio[0]) {
                    audioPath = files.audio[0].originalname
                }
                const response = await Podcast.create({
                    title,
                    description,
                    status,
                    topicId,
                    image: imagePath,
                    audio: audioPath
                })
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


const updatePodcast = (id, data, files) => {
    return new Promise(async (resolve, reject) => {

        const podcastId = new mongoose.Types.ObjectId(id);

        try {
            const existingPodcast = await Podcast.findById(podcastId);

            if (!existingPodcast) {
                return reject({
                    status: "ERR",
                    message: "Podcast not found!"
                });
            } 

            let imagePath = existingPodcast.image
            if (files && files.image && files.image[0]) {
                imagePath = files.image[0].originalname
            }

            let audioPath = existingPodcast.audio
            if (files && files.audio && files.audio[0]) {
                audioPath = files.audio[0].originalname
            }

            const updateFields = {
                ...data,
                image: imagePath,
                audio: audioPath
            };

            const response = await Podcast.findByIdAndUpdate(podcastId, updateFields, { new: true });

            if (response) {
                resolve({
                    status: "OK",
                    message: "Update podcast successful",
                    data: response
                });
            } else {
                reject({
                    status: "ERR",
                    message: "Podcast not found!"
                });
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "Update podcast failed!",
                error: error
            });
        }
    });
};


const getDetailsPodcast  = (id) => {
    return new Promise( async (resolve, reject) => {

        const podcastId = new mongoose.Types.ObjectId(id)

        const existingPodcast = await Podcast.findOne({
            _id:podcastId
        })
        if (!existingPodcast) {
            reject({
                status: 'ERR',
                message: 'The podcast not found!'
            })
        }

        try {
            const response = await Podcast.findById(podcastId)
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