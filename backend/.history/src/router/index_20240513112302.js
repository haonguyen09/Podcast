import UserRouter from './UserRouter'

const router = (app) => {
    app.get("/api/user/", UserRouter)
}

exports router