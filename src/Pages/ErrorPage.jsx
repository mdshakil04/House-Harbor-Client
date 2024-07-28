import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' flex flex-col justify-center items-center h-screen'>
            <h2 className="text-8xl text-center text-red-400 font-bold">404 Page not found</h2>
            <Link to='/'><button className=' btn  btn-warning mt-12'>Go Home</button></Link>
        </div>
    );
};

export default Error;