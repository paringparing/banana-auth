import React from 'react'
import { GoogleReCaptcha, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import styled from 'styled-components'
import axios from 'axios'
import { toast } from 'react-toastify'

const Button = styled.div`
    height: 60px;
    width: 250px;
    background: #d3d3d3;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    font-size: 26px;
    cursor: pointer;
    user-select: none;
`

const Register: React.FC = () => {
    const { executeRecaptcha } = useGoogleReCaptcha()
    const [loading, setLoading] = React.useState(false)

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Button
                onClick={async () => {
                    if (loading) return
                    setLoading(true)
                    await toast
                        .promise(
                            async () => {
                                try {
                                    const tokenP = new URLSearchParams(window.location.search.slice(1)).get('token')
                                    const token = await executeRecaptcha(tokenP)
                                    await axios.post('/api/verify', {
                                        token: tokenP,
                                        captchaToken: token,
                                    })
                                    alert('인증이 완료되었습니다.')
                                    window.close()
                                } finally {
                                    setLoading(false)
                                }
                            },
                            {
                                pending: '인증 대기중...',
                                success: '인증 성공',
                                error: '인증 실패',
                            }
                        )
                        .catch(() => console.log('failed'))
                }}
            >
                인증하기
            </Button>
        </div>
    )
}

export default Register
