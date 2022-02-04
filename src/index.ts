import { Client } from './structures/client'
import { config } from './config'
import { WebManager } from './webManager'
import chokidar from 'chokidar'
import path from 'path'

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

export const cts = new Client()

const run = async () => {
    console.log('Logging in')
    await cts.client.login(config.token)
    console.log('Starting server')
    await WebManager.load()
    await WebManager.listen()
    console.log('listening')
    if (config.dev) {
        chokidar.watch(path.join(__dirname, 'web/')).on('change', () => {
            WebManager.load().then(() => console.log('Refreshed web instance'))
        })
    }
}

run().then()
