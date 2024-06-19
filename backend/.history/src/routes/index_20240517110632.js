const UserRouter = require('./UserRouter')
const PodcastRouter = require('./PodcastRouter')

const routes = (app) => {
    app.use("/api/user", UserRouter)
    app.use("/api/podcast", PodcastRouter)
    app.use("/api/topic", TopicRouter)
}

module.exports = routes