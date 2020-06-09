import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import router from '@/routes/router'
import './App.scss'

function App() {
    return (
        <BrowserRouter>
            <Switch>{renderRoutes(router)}</Switch>
        </BrowserRouter>
    )
}

export default App
