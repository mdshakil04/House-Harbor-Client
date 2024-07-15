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