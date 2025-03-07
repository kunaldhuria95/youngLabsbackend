import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimiter from "express-rate-limit";
import mongoSanitize from 'express-mongo-sanitize'

//routes
import greetRoutes from './routes/greetRoutes.js'

//middleware
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js"

const app = express()
const PORT = process.env.PORT || 3000;

app.set('trust proxy', 1)

app.use(cors({ origin: "https://young-labsfrontend.vercel.app", credentials: true }))

app.use(
    rateLimiter({
        windowMs: 10 * 60 * 1000,
        max: 1000,
        message: "Too many request please try again later"
    })
)

app.use(helmet())
app.use(mongoSanitize())

app.use('/api/greet', greetRoutes)

app.use(notFound)
app.use(errorHandlerMiddleware)

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})   