import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './pages/Main'

const App: React.FC = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Layout>
        </>
    )
}

export default App
