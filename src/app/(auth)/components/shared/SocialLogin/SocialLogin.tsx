import React from 'react';
import { FC } from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin: FC = () => {
    return (
        <div>
            <div className='flex items-center'>
                <div className='h-px w-full bg-black/20' />
                <span className='text-black/60 w-full text-center'>Or continue with</span>
                <div className='h-px w-full bg-black/20' />
            </div>
            <div>
                <button
                    className='w-full px-4 py-2 bg-transparent hover:bg-slate-100 border rounded-md my-6 font-medium duration-100 flex items-center justify-center gap-2'
                >
                    <FaGoogle />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;