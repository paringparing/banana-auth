import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
    <GoogleReCaptchaProvider reCaptchaKey="6LeaDVgeAAAAADO1C8EYLmHfAAqMvugjOvqf1GT0">
        <ToastContainer style={{ zIndex: 999999 }} position="top-center" />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GoogleReCaptchaProvider>,
    document.querySelector('#app')!
)
