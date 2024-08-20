import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import SocialLogin from '../components/shared/SocialLogin/SocialLogin';
import SingUpForm from './components/SingUpForm/SingUpForm';

const SingUpPage: FC = () => {
    return (
        <div className='wrapper  flex items-center justify-center' style={{ minHeight: 'calc(100vh - 88px)' }}>
            <div className='max-w-lg w-full mx-auto py-6 md:px-4'>
                <div className='text-center space-y-2'>
                    <h3 className='text-3xl font-bold'>Register for an account</h3>
                    <p>Or <Link href={"#"}><span className='font-medium hover:text-black/70 duration-100'>start your 14-day free trial</span></Link></p>
                </div>
                <SingUpForm />
                <SocialLogin />
                <div>
                    <p className='text-black/60 text-center'>Already have an account? <Link href={"/login"}><span className='font-medium text-black/80 hover:text-black/90 duration-100'>Sign in</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUpPage;