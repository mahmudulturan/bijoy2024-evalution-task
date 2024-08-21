"use client"
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import { FC } from 'react';

const UserInfo: FC = () => {
    const { data: session } = useSession();
    return (
        <div className='wrapper my-10'>
            {
                session &&
                <>
                    <h1 className='text-3xl font-bold text-center'>Hello, {session?.user?.name}</h1>
                    <button onClick={() => signOut()} className='w-full px-4 py-2 bg-black hover:bg-black/80 text-white rounded-md my-6 font-medium duration-100'>Tap to logout</button>
                </>
            }

        </div>
    );
};

export default UserInfo;