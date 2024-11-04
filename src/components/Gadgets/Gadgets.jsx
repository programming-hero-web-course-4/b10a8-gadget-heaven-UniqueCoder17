import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch('./gadgetsData.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl lg:text-4xl text-center font-bold'>Explore Cutting-Edge Gadgets</h1>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='card-body flex flex-col mt-10 shadow-xl h-[470px] space-y-1 rounded-3xl'>
                    <button className='btn text-xl rounded-3xl font-bold'>All Product</button>
                    <button className='btn text-xl rounded-3xl font-bold'>Laptops</button>
                    <button className='btn text-xl rounded-3xl font-bold'>Phones</button>
                    <button className='btn text-xl rounded-3xl font-bold'>Accessories</button>
                    <button className='btn text-xl rounded-3xl font-bold'>Smart Watches</button>
                    <button className='btn text-xl rounded-3xl font-bold'>MacBook</button>
                    <button className='btn text-xl rounded-3xl font-bold'>Iphone</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                    {
                        gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;