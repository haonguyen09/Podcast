const UserRouter = require('./UserRouter')
const PodcastRouter = require('./PodcastRouter')
const TopicRouter = require('./TopicRouter')
const CommentRouter = require('./CommentRouter')
const TeamRouter = require('./TeamRouter')

const routes = (app) => {
    app.use("/api/user", UserRouter)
    app.use("/api/podcast", PodcastRouter)
    app.use("/api/topic", TopicRouter)
    app.use("/api/comment", CommentRouter)
    app.use("/api/team", TeamRouter)
}

module.exports = routes