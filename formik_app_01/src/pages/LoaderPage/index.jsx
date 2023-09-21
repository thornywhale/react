import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { getUsersJSON, getEventsJSON, getProductsJSON } from '../../api';
// import LoaderData from '../../components/LoaderData';
// import ViewUsers from '../../components/ViewUsers';
// import ViewEvents from '../../components/ViewEvents';
// import ViewProducts from '../../components/ViewProducts';

const LoaderPage = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/loader/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/loader/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/loader/products">Products</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default LoaderPage;