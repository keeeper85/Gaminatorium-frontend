import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import darkTheme from './themes/darkTheme.ts'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>
)
