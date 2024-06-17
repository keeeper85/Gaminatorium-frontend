import {useState} from "react";
import {Box, Button, InputBase, Paper} from "@mui/material";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Tutaj można dodać logikę logowania
        console.log('Username:', username, 'Password:', password);
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                style={{borderRadius: '25px'}}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Username"
                    inputProps={{ 'aria-label': 'enter your username' }}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Paper>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mt: 2 }}
                style={{borderRadius: '25px'}}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    type="password"
                    placeholder="Password"
                    inputProps={{ 'aria-label': 'enter your password' }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Paper>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                Login
            </Button>
        </Box>
    );
}

export default LoginForm
