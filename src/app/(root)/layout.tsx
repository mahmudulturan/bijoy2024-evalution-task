import Navbar from '@/components/layouts/Navbar/Navbar';
import React from 'react';
import { FC } from 'react';

const layout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default layout;