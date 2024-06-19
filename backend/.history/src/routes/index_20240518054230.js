const UserRouter = require('./UserRouter')
const PodcastRouter = require('./PodcastRouter')
const TopicRouter = require('./TopicRouter')

const routes = (app) => {
    app.use("/api/user", UserRouter)
    app.use("/api/podcast", PodcastRouter)
    app.use("/api/topic", TopicRouter)
    app.use("/api/comment", CommentRouter)
}

module.exports = routes