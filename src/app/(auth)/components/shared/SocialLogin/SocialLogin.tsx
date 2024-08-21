"use client"
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FC } from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin: FC = () => {
    const { data: session } = useSession();
    const router = useRouter();
    if (session) {
        router.push("/");
    }

    return (
        <div>
            <div className='flex items-center'>
                <div className='h-px w-full bg-black/20' />
                <span className='text-black/60 w-full text-center'>Or continue with</span>
                <div className='h-px w-full bg-black/20' />
            </div>
            <div>
                <button
                    onClick={() => signIn("google")}
                    className='w-full px-4 py-2 bg-transparent hover:bg-slate-100 border rounded-md my-6 font-medium duration-100 flex items-center justify-center gap-2'
                >
                    <FaGoogle />
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;