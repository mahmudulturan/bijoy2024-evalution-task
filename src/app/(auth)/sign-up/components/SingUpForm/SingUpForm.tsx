"use client"
import React, { useEffect } from 'react';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type TSignUpInputs = {
    name: string;
    zip_code: string;
    phone: string;
    email: string;
    password: string;
    confirm_password: string;
}

const SingUpForm: FC = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<TSignUpInputs>()
    const [passwordNotMatch, setPasswordNotMatch] = React.useState(false)

    const onSubmit: SubmitHandler<TSignUpInputs> = (data) => {
        if (data.password !== data.confirm_password) {
            setPasswordNotMatch(true)
        }
        console.log(data);
    };

    const confirmPassword = watch('confirm_password');
    const password = watch('password');

    useEffect(() => {
        setPasswordNotMatch(false)
    }, [confirmPassword, password]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='my-6 space-y-3'>
            <div>
                <input
                    type="text"
                    {...register('name', { required: true })}
                    id="name"
                    placeholder='Full Name'
                    className='w-full px-4 py-2 border outline-none rounded-md placeholder:text-black/60'
                />
                {errors.name && <p className='text-red-600 text-sm mx-2 my-1'>Name is required</p>}
            </div>
            <div>
                <input
                    type="email"
                    {...register('email', { required: true })}
                    id="email"
                    placeholder='Email address'
                    className='w-full px-4 py-2 border outline-none rounded-md placeholder:text-black/60'
                />
                {errors.email && <p className='text-red-600 text-sm mx-2 my-1'>Email is required</p>}
            </div>
            <div>
                <input
                    type="text"
                    {...register('phone', { required: true })}
                    id="zip_code"
                    placeholder='Zip Code'
                    className='w-full px-4 py-2 border outline-none rounded-md placeholder:text-black/60'
                />
                {errors.phone && <p className='text-red-600 text-sm mx-2 my-1'>Phone is required</p>}
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
            <div>
                <input
                    type="password"
                    {...register('confirm_password', { required: true })}
                    id="confirm-password"
                    placeholder='Confirm Password'
                    className='w-full px-4 py-2 border outline-none rounded-md placeholder:text-black/60'
                />
                {errors.confirm_password && <p className='text-red-600 text-sm mx-2 my-1'>Confirm Password is required</p>}
                {passwordNotMatch && <p className='text-red-600 text-sm mx-2 my-1'>Password not match</p>}
            </div>
            <button
                type='submit'
                className='w-full px-4 py-2 bg-black hover:bg-black/80 text-white rounded-md my-6 font-medium duration-100'
            >
                Sign up
            </button>
        </form>
    );
};

export default SingUpForm;