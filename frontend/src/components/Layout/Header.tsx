import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;
    padding-left: 24px;
    padding-right: 24px;
`

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1300px;
    align-items: center;
`

const Title = styled(Link)`
    font-size: 36px;
    color: #fff;
    text-decoration: none;
`

const Header: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title to="/">BANANA</Title>
            </Content>
        </Container>
    )
}

export default Header
