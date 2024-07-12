import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import Login from './core/Login/Login.tsx'
import { ThemeProvider } from '@mui/material'
import darkTheme from './themes/darkTheme.ts'
import ChangePassword from './core/ChangePassword/ChangePassword.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<Router>
				<Routes>
					<Route path='/' Component={App} />
					<Route path='/login' Component={Login} />
					<Route path='/change-password' element={<ChangePassword />} />
				</Routes>
			</Router>
		</ThemeProvider>
	</React.StrictMode>
)
