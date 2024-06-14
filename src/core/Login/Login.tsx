import {AuthProvider} from "../../contexts/Authcontext.tsx";
import Navbar from "../../components/Navbar/Navbar.tsx";
import LoginForm from "./LoginForm.tsx";

function Login()  {
    return (
        <AuthProvider>
            <header className="flex justify-center">
                <Navbar />
            </header>

            <main className='flex flex-col justify-center items-center'>
                <div className='w-auto rounded-2xl shadow-[6px_4px_32px_-3px_rgba(0,0,0,1)]  bg-black md:m-40 m-20 p-20'>
                    <div className="mb-9">

                    <h2 className="font-irish text-8xl text-center p-10 ">Login</h2>
                    </div>
                    <LoginForm />
                    {/*{children}*/}
                </div>

            </main>
        </AuthProvider>
    )
}

export default Login
