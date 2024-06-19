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
                const response = await Topic.create({
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


const updateTopic = (id, data, files) => {
    return new Promise(async (resolve, reject) => {

        const topicId = new mongoose.Types.ObjectId(id);

        try {
            const existingTopic = await Topic.findById(topicId);

            if (!existingTopic) {
                return reject({
                    status: "ERR",
                    message: "Topic not found!"
                });
            } 

            
            let iconPath = existingTopic.icon
            if (files && files.icon && files.icon[0]) {
                iconPath = files.icon[0].originalname
            }
            
            let imagePath = existingTopic.image
            if (files && files.image && files.image[0]) {
                imagePath = files.image[0].originalname
            }

            const updateFields = {
                ...data,
                icon: iconPath,
                image: imagePath
            };

            const response = await Topic.findByIdAndUpdate(topicId, updateFields, { new: true });

            if (response) {
                resolve({
                    status: "OK",
                    message: "Update topic successful",
                    data: response
                });
            } else {
                reject({
                    status: "ERR",
                    message: "Topic not found!"
                });
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "Update topic failed!",
                error: error
            });
        }
    });
};


const getDetailsTopic  = (id) => {
    return new Promise( async (resolve, reject) => {

        const topicId = new mongoose.Types.ObjectId(id)

        const existingTopic = await Topic.findOne({
            _id:topicId
        })
        if (!existingTopic) {
            reject({
                status: 'ERR',
                message: 'The topic not found!'
            })
        }

        try {
            const response = await Topic.findById(topicId)
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

const deleteTopic = (id) => {
    return new Promise( async (resolve, reject) => {

        const topicId = new mongoose.Types.ObjectId(id)

        const existingTopic = await Podcast.findOne({
            _id:topicId
        })
        if (!existingTopic) {
            reject({
                status: 'ERR',
                message: 'The topic not found!'
            })
        }

        try {
            const response = await Topic.findByIdAndDelete(topicId)
            if (response) {
                resolve({
                    status: "OK",
                    message: "Delete topic successful"
                })
            }
        } catch (error) {
            reject({
                status: "ERR",
                message: "delete topic failed!",
                error: error
            })
        }
    })
}


const getAllTopic = async (limit = 4, page = 0, filter) => {
        try {
            const totalTopic = await Topic.countDocuments()
            const queryConditions = {}
            if (filter) {
                queryConditions[filter[0]] = { '$regex': filter[1], '$options': 'i' };
            }
            const response = await Topic.find(queryConditions).limit(limit).skip(limit * page)
                                        
            if (response) {
                return{
                    status: "OK",
                    message: "Get all podcast successful",
                    data: response,
                    totals: totalTopic,
                    page: Number(page) + 1,
                    totalPage: Math.ceil(totalTopic / limit)
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