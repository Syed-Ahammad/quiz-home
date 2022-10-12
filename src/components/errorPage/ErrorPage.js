import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col mt-8 justify-center items-center w-1/2 m-auto'>
            <h1 className='text-2xl font-bold'>Ooups page not found</h1>
            <p className='text-lg p-4 m-3'>We are very sorry for the inconvenience. It looks like you're trying to access a page that has been deleted or never even existed.</p>
            <Link to={'/home'}><button className='btn btn-outline'>Back  To Home</button></Link>
        </div>
    );
};

export default ErrorPage;