import express from 'express'
import path from 'path'
import axios from 'axios'
import { config } from '../config'
import { cts, prisma } from '../index'

const app = express()

app.use(express.static(path.join(process.cwd(), 'dist/client')))

app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(process.cwd(), 'dist/client/app.html'))
        return
    }
    return next()
})

app.use(express.json())

app.post('/api/verify', async (req, res) => {
    if (!req.body.token || !req.body.captchaToken) return res.status(400).json({ error: 'invalid body' })
    const { data } = await axios.post(
        'https://google.com/recaptcha/api/siteverify?' +
            new URLSearchParams({
                secret: config.captchaSecret,
                response: req.body.captchaToken,
            })
    )
    if (!data.success) {
        return res.status(400).json({
            errors: data['error-codes'],
        })
    }
    if (data.action !== req.body.token) return res.status(400).json({ error: 'invalid token' })
    const item = await prisma.authSessions.findUnique({ where: { id: data.action } })
    if (!item) return res.status(400).json({ error: 'auth session not found' })
    const guild = cts.client.guilds.cache.get(config.guild) ?? (await cts.client.guilds.fetch(config.guild))
    const user = await guild.members.fetch(item.user)
    await user.roles.add(config.registerRole)
    await prisma.authSessions.delete({ where: { id: item.id } })
    res.json({ ok: 1 })
})

export default app
