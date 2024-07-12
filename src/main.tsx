import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Login from './core/Login/Login.tsx'
import { ThemeProvider } from '@mui/material'
import darkTheme from './themes/darkTheme.ts'
import Page404 from './components/Page404/Page404.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<Router>
				<Routes>
					<Route path='/' Component={App} />
					<Route path='/login' Component={Login} />
					<Route path='*' Component={Page404} />
				</Routes>
			</Router>
		</ThemeProvider>
	</React.StrictMode>
)
