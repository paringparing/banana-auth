import { createServer, Server } from 'http'
import { Express } from 'express'
import { config } from './config'
import path from 'path'

export class WebManager {
    static server?: Server

    static app?: Express

    static listen() {
        return new Promise<void>((resolve) => {
            const server = createServer((req, res) => {
                this.app?.(req, res)
            })
            this.server = server
            server.listen(config.port, resolve)
        })
    }

    static async load() {
        Object.keys(require.cache)
            .filter((x) => x.startsWith(path.join(__dirname, 'web/')))
            .forEach((x) => {
                delete require.cache[x]
                console.log(`Uncached ${x}`)
            })
        this.app = (await import('./web/app')).default
    }
}
