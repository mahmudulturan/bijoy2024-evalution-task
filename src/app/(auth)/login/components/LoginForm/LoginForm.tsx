"use client"
import React from 'react';
import { FC } from 'react';

const LoginForm: FC = () => {

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (

        <form onSubmit={handleLogin} className='my-6 space-y-3'>
            <input
                type="email"
                name="email"
                id="email"
                placeholder='Email address'
                className='w-full px-4 py-2 border outline-none rounded-md placeholder:text-black/60'
            />
            <input
                type="password"
                name="password"
                id="password"
                placeholder='Password'
                className='w-full px-4 py-2 border outline-none rounded-md placeholder:text-black/60'
            />
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