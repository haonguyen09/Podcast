const Topic = require('../model/TopicModel');

const createTopic = (newTopic, files) => {
    return new Promise(async (resolve, reject) => {
        if (!newTopic) {
            return reject(new TypeError("New topic data is required"));
        }
        if (newTopic) {
            const { name } = newTopic
            let imagePath, iconPath

            const existingTopic = await Topic.findOne({ name })
            if (existingTopic) {
                return reject({
                    status: "ERR",
                    message: "Name already exists!"
                })
            } 
            console.log("filesService", files)
            try {
                if (files.image && files.image[0]) {
                    imagePath = files.image[0].originalname
                }
                if (files.icon && files.icon[0]) {
                    iconPath = files.icon[0].originalname
                }
                const response = await Podcast.create({
                    name,
                    icon: iconPath,
                    image: imagePath
                })
                if (response) {
                    resolve({
                        status: "OK",
                        message: "Create topic successful",
                        data: response
                    })
                }
            } catch (error) {
                reject({
                    status: "ERR",
                    message: "Create topic failed!",
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
                status: "ERR",
                message: "Get details failed!",
                error: error
            })
        }
    })
}

const deletePodcast = (id) => {
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
            const response = await Podcast.findByIdAndDelete(podcastId)
            if (response) {
                resolve({
                    status: "OK",
                    message: "Delete podcast successful"
                })
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "delete podcast failed!",
                error: error
            })
        }
    })
}


const getAllPodcast = async (limit = 4, page = 0, filter) => {
        try {
            const totalPodcast = await Podcast.countDocuments()
            const queryConditions = {}
            if (filter) {
                queryConditions[filter[0]] = { '$regex': filter[1], '$options': 'i' };
            }
            const response = await Podcast.find(queryConditions).limit(limit).skip(limit * page)
                                        .populate({ path: "userId" })
                                        .populate({ path: "topicId" })
                                        .populate({ path: "comments" })
            if (response) {
                return{
                    status: "OK",
                    message: "Get all podcast successful",
                    data: response,
                    totals: totalPodcast,
                    page: Number(page) + 1,
                    totalPage: Math.ceil(totalPodcast / limit)
                }
            }
        } catch (e) {
            return({
                status: "ERR",
                message: "get all podcast failed!",
                error: e
            })
        }
}


module.exports = {
    createPodcast,
    updatePodcast,
    getDetailsPodcast,
    deletePodcast,
    getAllPodcast
}