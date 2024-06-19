import UserRouter from './UserRouter'

const router = (app) => {
    app.get("/api/user", UserRouter)
}

module.exports = router