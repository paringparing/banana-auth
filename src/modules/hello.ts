import { listener, Module, applicationCommand } from '@pikokr/command.ts'
import { Client } from '../structures/client'
import { CommandInteraction, MessageEmbed } from 'discord.js'
import { config } from '../config'
import { prisma } from '../index'

class Hello extends Module {
    constructor(private cts: Client) {
        super()
    }

    @applicationCommand({
        command: {
            type: 'CHAT_INPUT',
            name: 'register',
            description: '인증',
        },
    })
    async test(i: CommandInteraction) {
        if (!i.member) return
        let already
        if (i.member.roles instanceof Array) {
            already = i.member.roles.includes(config.registerRole)
        } else {
            already = i.member.roles.cache.has(config.registerRole)
        }

        if (already)
            return i.reply({
                ephemeral: true,
                content: 'already registered',
            })

        if (!!(await prisma.authSessions.findFirst({ where: { user: i.user.id } }))) {
            await prisma.authSessions.deleteMany({ where: { user: i.user.id } })
        }

        const sess = await prisma.authSessions.create({
            data: {
                user: i.user.id,
            },
        })

        await i.reply({
            ephemeral: true,
            embeds: [new MessageEmbed().setTitle('인증').setDescription(`[여기](${config.webURL}/register?token=${sess.id})를 클릭해 인증을 진행해 주세요`)],
        })
    }

    @listener('ready')
    ready() {
        this.logger.info(`Logged in as ${this.cts.client.user!.tag}`)
    }
}

export function install(cts: Client) {
    return new Hello(cts)
}
