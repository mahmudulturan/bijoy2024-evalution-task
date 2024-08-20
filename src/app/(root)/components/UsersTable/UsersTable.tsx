import React from 'react';
import { FC } from 'react';


type TUser = {
    name: string;
    email: string;
    phone: string;
    website: string;
    id: number;

}

const UsersTable: FC = async () => {
    const data: TUser[] = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
        res.json()
    )
    return (
        <div className='wrapper my-10'>
            <h1 className='text-3xl font-bold mb-5'>All Users</h1>
            <table className='w-full border rounded-2xl'>
                <thead>
                    <tr className='border-b'>
                        <th className='text-left py-4 px-4 '>#</th>
                        <th className='text-left py-4 px-4'>Name</th>
                        <th className='text-left py-4 px-4'>Email</th>
                        <th className='text-left py-4 px-4'>Phone</th>
                        <th className='text-left py-4 px-4'>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr key={user.id} className='border-b py-3 hover:bg-slate-100 duration-100'>
                            <td className='py-3 px-4'>{user.id}</td>
                            <td className='py-3 px-4'>{user.name}</td>
                            <td className='py-3 px-4'>{user.email}</td>
                            <td className='py-3 px-4'>{user.phone}</td>
                            <td className='py-3 px-4'>{user.website}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;