
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../utils/context'

const Login = (props) => {
    const authCtx = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: data })
        };
        await fetch('/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success === "true") {
                    const cookies = new Cookies();


                    cookies.set('Register Company', data, { path: '/' });
                    authCtx.login(data.token, data.userId)
                    navigate('home')
                }
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email..." {...register("email")} />
            <p>{errors.email?.message}</p>
            <input
                type="password"
                placeholder="Password..."
                {...register("password")}
            />
            <p>{errors.password?.message}</p>
            <button type="submit">Log In</button>
        </form>
    )
}
export default Login