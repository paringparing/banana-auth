import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './pages/Main'
import Register from './pages/Register'

const App: React.FC = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Layout>
        </>
    )
}

export default App
