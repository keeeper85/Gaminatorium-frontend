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
            <span className="m-4 self-start text-base font-inknut">email</span>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: '25px' }}
                className="w-full md:w-80"
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    inputProps={{ 'aria-label': 'enter your username' }}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Paper>
            <span className="m-2 self-start text-xs font-inknut text-red">email is empty!</span>
            <span className="m-2 self-start text-base font-inknut">password</span>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',  borderRadius: '25px' }}
                className="w-full md:w-80"
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    type="password"
                    inputProps={{ 'aria-label': 'enter your password' }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Paper>
            <div className="m-2 text-xs font-inknut flex space-x-6">
            <span className=" text-red">password is empty!</span>
            <span >Forgot your password?</span>

            </div>
            <span className="m-2 text-xs font-inknut text-red">Invalid email or password</span>
            <span className="mt-4 mb-2 mx-2 self-start text-xs font-inknut">You don't have account? Register here!</span>
            <Button type="submit" variant="contained" sx={{m:2}} className="w-full font-inknut" >
                Login
            </Button>
        </Box>
    );
}

export default LoginForm
