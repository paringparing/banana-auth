import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(process.cwd(), 'dist/client')))

app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(process.cwd(), 'dist/client/app.html'))
        return
    }
    return next()
})

export default app
