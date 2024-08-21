"use client"
import React from 'react';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type TLoginInputs = {
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TLoginInputs>()


    const onSubmit: SubmitHandler<TLoginInputs> = (data) => {
        console.log(data);
    };

    return (

        <form onSubmit={handleSubmit(onSubmit)} className='my-6 space-y-3'>
            <div>
                <input
                    type="email"
                    id="email"
                    {...register('email', { required: true })}
                    placeholder='Email address'
                    className='w-full px-4 py-2 border outline-none rounded-md placeholder:text-black/60'
                />
                {errors.email && <p className='text-red-600 text-sm mx-2 my-1'>Email is required</p>}
            </div>
            <div>
                <input
                    type="password"
                    {...register('password', { required: true })}
                    id="password"
                    placeholder='Password'
                    className='w-full px-4 py-2 border outline-none rounded-md placeholder:text-black/60'
                />
                {errors.password && <p className='text-red-600 text-sm mx-2 my-1'>Password is required</p>}
            </div>
            <button
                type='submit'
                className='w-full px-4 py-2 bg-black hover:bg-black/80 text-white rounded-md my-6 font-medium duration-100'
            >
                Sign in
            </button>
        </form>
    );
};

export default LoginForm;