import React from 'react';
import { FC } from 'react';
import UsersTable from './components/UsersTable/UsersTable';

const HomePage: FC = () => {
  return (
    <div>
      <UsersTable />
    </div>
  );
};

export default HomePage;