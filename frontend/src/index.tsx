import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#app')!
)
