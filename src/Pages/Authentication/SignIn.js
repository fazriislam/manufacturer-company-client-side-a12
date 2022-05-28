import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const SignIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [token] = useToken(user || guser)
    const location = useLocation();
    let allError;
    let from = location.state?.from?.pathname || "/";

     useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if(loading  || gloading){
        return <Loading/>
    }
    if (error || gerror) {
        allError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email",)}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password")}
                            />
                        </div>
                        {allError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Sign In" />
                    </form>
                    <p><small>New here? <Link className='text-primary' to="/signup">Please Sign Up</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        className="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >Continue with Google</button>
                </div>
            </div>
        </div >
    );
};

export default SignIn;