import {FormEvent, useState} from "react";
import {Box, Button, InputBase, Paper} from "@mui/material";
import { z } from 'zod';
import {NavLink, useNavigate} from "react-router-dom";

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }).nonempty({ message: "Email is required" }),
    password: z.string().min(1, { message: "Password is required" })
});

function LoginForm() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', validationBackendError: false });

    const handleEmailCheck = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
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

    const handlePasswordCheck = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => {
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
    const handleSubmit = async (event :   FormEvent<HTMLFormElement>) => {
        // event.preventDefault();
        console.log(event)
        const result = loginSchema.safeParse({
            email: username,
            password: password
        });
        // TODO:
        // send to backend and verify the user
        if(result.success) {
                console.log("Form is valid: ", result.data);
            //     add logic to login
            navigate("/")
        }
        if(!result.success) {
            setErrors( {
                ...errors,
                validationBackendError: true
            })
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
                    inputProps={{ 'aria-label': 'enter your username', autoComplete: 'e-mail' }}
                    value={username}
                    onChange={event =>
                        setUsername(event.target.value)


                    }
                    onBlur={event => handleEmailCheck(event) }
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
                    inputProps={{ 'aria-label': 'enter your password', autoComplete: 'password' }}
                    value={password}
                    onChange={event => {
                        setPassword(event.target.value)
                    }}
                    onBlur={event => handlePasswordCheck(event) }
                />
            </Paper>
            <div className="m-2 text-xs font-inknut flex  justify-between w-full">
            <span className=" text-red">{errors.password || '\u00A0'}</span>
                <NavLink to="/ForgotPassword" className=" text-darkSapphire hover:text-red"><span >Forgot your password?</span></NavLink>

            </div>
            <span className="m-2 text-xs font-inknut text-red">{!errors.validationBackendError || 'Invalid email or password'}</span>
            <span className="mt-4 mb-2 mx-2 self-start text-xs font-inknut">You don't have account? <NavLink to="/Register" className=" text-darkSapphire hover:text-red">Register here!</NavLink></span>
            <Button type="submit" variant="contained" sx={{m:2}} className="w-full font-inknut" >
                Login
            </Button>
        </Box>
    </>
}

export default LoginForm
