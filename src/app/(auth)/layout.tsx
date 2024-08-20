import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <div className='wrapper my-6'>
                <Link href={'/'}>
                    <button className='flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 duration-150'> <FaArrowLeft />
                        Back to Home</button>
                </Link>
            </div>
            {children}
        </div>
    );
};

export default layout;