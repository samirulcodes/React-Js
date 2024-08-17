import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice' // we call login as authLogin
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    // useNavigate() is a powerful tool for managing navigation in React applications
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm() //react-hook-form
    const [error, setError] = useState("") //for display erorr , there is a chance of coming error

    // async()-->because information will submit , infor. will return , too many work
    const login = async(data) => {
        setError("") //cleaning up error
        try {
            const session = await authService.login(data)
            if (session) {
                // userData always await se niklega q ke userData koi session se nhi nikal rhe h ,getCurrentUser() ko call kr rhe h
                const userData = await authService.getCurrentUSer()
                if(userData) dispatch(authLogin(userData));
                navigate("/") // if user login then directly go to root or page
            }
        } catch (error) {
            setError(error.message) // whatever error we save in state
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]"><Logo width="100%" /></span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">Don&apos;t have any account?&nbsp;
             <Link  to="/signup"className="font-medium text-primary transition-all duration-200 hover:underline" >Sign Up
             </Link>
        </p>

        {/* if error then display */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        {/* FORM */}
        {/* handleSubmit() is basically keyword coming from react hook */}
        {/*  to manage your data inputs, validation, errors, etc.. before calling your own sendData function. */}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                {/* input-> component */}
                <Input label="Email: " placeholder="Enter your email" type="email"
                // ...register is compulsory q ki agr register kahi aur input me use krenge to uska value overwrite ho jayega , so spread it
                // in this register there is a value- email and also there is obj. and there will be option in obj.
                {...register("email", {
                    required: true,
                    validate: {
                        // email validation (optional)
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })} />
                <Input label="Password: "  type="password"
                placeholder="Enter your password" {...register("password", { required: true,
                })} />
                <Button type="submit"className="w-full">Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login