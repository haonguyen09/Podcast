import UserRouter from './UserRouter'
import { Router } from 'express'

const router = (app) => {
    app.use("/api/user", UserRouter)
}

module.exports = router