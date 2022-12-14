import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 md:flex-row flex flex-col">
        <div className="flex-1">
          <Link to='/home' className="btn btn-ghost normal-case text-2xl font-bold"><span className='text-cyan-500'>Quiz House</span></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/home'>Home</Link></li>
            <li><Link to={'/statistics'}>Statistics</Link></li>
            <li><Link to={'/blogs'}>Blog</Link></li>
            
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;