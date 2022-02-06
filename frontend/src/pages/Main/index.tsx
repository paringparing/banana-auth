import React from 'react'
import ReactFullPage from '@fullpage/react-fullpage'
import styled from 'styled-components'
import TeamMember from '../../components/TeamMember'
import Marquee from 'react-fast-marquee'

const Button = styled.a`
    text-decoration: none;
    user-select: none;
    cursor: pointer;
    height: 60px;
    width: 250px;
    background: #d3d3d3;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    font-size: 26px;
`

const DiscordButton = styled(Button)`
    background: #00a6ff;
`

const MainPage: React.FC = () => {
    return (
        <ReactFullPage
            navigation={true}
            render={() => {
                return (
                    <ReactFullPage.Wrapper>
                        <div className="section">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column' }}>
                                <div style={{ fontSize: 64 }}>바나나</div>
                                <div style={{ fontSize: 48 }}>Wa Sans</div>
                                <div style={{ marginTop: 50, display: 'flex', gap: 70 }}>
                                    <Button href="https://discord.com" rel="noreferrer" target="_blank">
                                        와
                                    </Button>
                                    <DiscordButton href="https://discord.com" rel="noreferrer" target="_blank">
                                        디스코드
                                    </DiscordButton>
                                </div>
                            </div>
                        </div>
                        <div className="section">
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', gap: 84, flexDirection: 'column' }}>
                                <div style={{ fontSize: 75 }}>관리자</div>
                                <Marquee gradientColor={[0, 0, 0]} direction="right" speed={48}>
                                    <TeamMember nick="닉네임" pfp="https://via.placeholder.com/512" />
                                    <TeamMember nick="닉네임" pfp="https://via.placeholder.com/512" />
                                    <TeamMember nick="닉네임" pfp="https://via.placeholder.com/512" />
                                    <TeamMember nick="닉네임" pfp="https://via.placeholder.com/512" />
                                    <TeamMember nick="닉네임" pfp="https://via.placeholder.com/512" />
                                    <TeamMember nick="닉네임" pfp="https://via.placeholder.com/512" />
                                </Marquee>
                            </div>
                        </div>
                        <div className="section fp-auto-height">대충 푸터</div>
                    </ReactFullPage.Wrapper>
                )
            }}
        />
    )
}

export default MainPage
