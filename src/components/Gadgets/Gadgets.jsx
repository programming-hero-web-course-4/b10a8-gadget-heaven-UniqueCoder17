import React, { useEffect, useState } from 'react';

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('./gadgetsData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])

    return (
        <div>
            <h1 className='text-2xl lg:text-4xl text-center'>Explore Cutting-Edge Gadgets</h1>
            <p>{gadgets.length}</p>
        </div>
    );
};

export default Gadgets;