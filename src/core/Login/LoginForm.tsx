import {useState} from "react";
import {Box, Button, InputBase, Paper} from "@mui/material";
import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }).nonempty({ message: "Email is required" }),
    password: z.string().min(1, { message: "Password is required" })
});

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const handleEmailCheck = (event:any) => {
        event.preventDefault();
        const result = loginSchema.safeParse({
            email: username,
            password: password
        });
        let emailError = '';
        result.error?.issues.forEach(issue => {
            if(issue.path[0] === 'email') {
                emailError = issue.message;
            }

        })
            setErrors(errors => {
                return {
                    ...errors,
                    email: emailError
                }
            })
    }

    const handlePasswordCheck = (event:any) => {
        event.preventDefault();
        const result = loginSchema.safeParse({
            email: username,
            password: password
        });
        let passwordError = '';
        result.error?.issues.forEach(issue => {
            if(issue.path[0] === 'password') {
                passwordError = issue.message;
            }
        })
        setErrors( {

            ...errors,
            password: passwordError

        })
    }
    const handleSubmit = async (event : any) => {
        console.log(event)
        event.preventDefault();

        const result = loginSchema.safeParse({
            email: username,
            password: password
        });
        console.log(result);
        if(result.success) {
                setErrors({ email: '', password: '' });
                console.log("Form is valid: ", result.data);
            return
        }
    };

    return <>
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
                    onChange={e =>
                        setUsername(e.target.value)


                    }
                    onBlur={e => handleEmailCheck(e) }
                />
            </Paper>
            <span className="m-2 self-start text-xs font-inknut text-red">{errors.email || '\u00A0'}</span>
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
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                    onBlur={e => handlePasswordCheck(e) }
                />
            </Paper>
            <div className="m-2 text-xs font-inknut flex  justify-between w-full">
            <span className=" text-red">{errors.password || '\u00A0'}</span>
            <span >Forgot your password?</span>

            </div>
            <span className="m-2 text-xs font-inknut text-red">Invalid email or password</span>
            <span className="mt-4 mb-2 mx-2 self-start text-xs font-inknut">You don't have account? Register here!</span>
            <Button type="submit" variant="contained" sx={{m:2}} className="w-full font-inknut" >
                Login
            </Button>
        </Box>
    </>
}

export default LoginForm
