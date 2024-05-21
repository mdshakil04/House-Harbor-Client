import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' flex flex-col justify-center items-center'>
            <h2 className="text-7xl text-center text-red-400 font-bold">404 Page not found</h2>
            <Link to='/'><button className=' btn  btn-warning'>Go Home</button></Link>
        </div>
    );
};

export default Error;