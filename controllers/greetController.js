import { StatusCodes } from "http-status-codes";

const getGreeting = (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(StatusCodes.BAD_REQUEST).json({ "error": "Name is required" })
    }
    res.status(StatusCodes.OK).json({ "message": `Hello, ${name}! Welcome To YoungLabs.` })
}

export { getGreeting }