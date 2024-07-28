/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Appartement from './Appartement';

const Appartements = () => {
    const [appartements, setAppartements] = useState([]);
    useEffect(() => {
        fetch("houses.json")
        .then(res => res.json())
        .then(data => setAppartements(data))
    }, []);
    return (

        <div>
            <div className=''>
            <h2 className="text-5xl text-center leading-none tracking-tight">Explore Home in Dhaka</h2>
            <p className=' text-center tracking-wider'>Take a deep dive and browse homes for sale, original neighborhood photos,<br/> resident reviews and local insights to find what is right for you.</p>
            </div>
            <div className=' grid lg:grid-cols-4 md:grid-cols-2 justify-center gap-4 my-4 p-4 container mx-auto'>
            {
                   appartements.map((appartement) => <Appartement
                        key={appartement._id}
                        appartement={appartement}
                    ></Appartement>)
            }
            </div>
        </div>
    );
};

export default Appartements;