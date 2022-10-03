import { Link, NavLink } from 'react-router-dom';

import AppImage from './../../assets/images/APPS.png';
import React from 'react';

const Navigation = () => {
  const paths = [
    {
      url: '/bloom',
      new: false,
      text: 'Admin Console',
    },
    {
      url: '/workstation',
      new: false,
      text: 'Agent Workstation',
    },
    {
      url: '/vuejs',
      new: true,
      text: 'Vuejs',
    },
    {
      url: '/internal',
      new: false,
      text: 'Internal',
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Link
          to="/bloom"
          className="flex justify-center text-base"
          aria-label="App-nav"
        >
          <div className="flex flex-row p-4">
            {/*<div
              className="bg-no-repeat bg-cover w-14 h-14"
              style={{ backgroundImage: `url(${AppImage})` }}
            ></div>*/}
            <div className="flex items-center pl-2">TWILIO AION</div>
          </div>
        </Link>
        {paths.map((path, index) => (
          <NavLink
            activeClassName="custom-hover-nav-active"
            to={path.url}
            className="flex items-center justify-start w-full pl-4 text-base cursor-pointer h-14 custom-hover-nav"
            aria-label="App-nav"
            key={index}
          >
            <div className="inline-flex">
              {path.text}{' '}
              {path.new && <span className="ml-4 custom-badge">NEW</span>}
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink
        to="/feedback"
        activeClassName="custom-hover-nav-active"
        className="flex items-center pl-4 text-base cursor-pointer h-14"
        aria-label="App-nav"
      >
        Leave Feedback
      </NavLink>
    </div>
  );
};

export default Navigation;
