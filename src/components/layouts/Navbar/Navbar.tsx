import Link from 'next/link';
import React from 'react';
import { FC } from 'react';

const Navbar: FC = () => {
    return (
        <div className='wrapper flex items-center justify-center gap-6 py-2'>
            <Link className='px-4 py-2 font-medium bg-slate-100 rounded-md' href={'/'}>Home</Link>
            <Link className='px-4 py-2 font-medium bg-slate-100 rounded-md' href={'/login'}>Login</Link>
            <Link className='px-4 py-2 font-medium bg-slate-100 rounded-md' href={'/sign-up'}>Sign Up</Link>
        </div>
    );
};

export default Navbar;