import React from 'react';
import { FC } from 'react';
import UsersTable from './components/UsersTable/UsersTable';
import UserInfo from './components/UserInfo/UserInfo';

const HomePage: FC = () => {
  return (
    <div>
      <UserInfo />
      <UsersTable />
    </div>
  );
};

export default HomePage;