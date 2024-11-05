import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';



const Profile = () => {

    const [cards, setCards] = useState([
        { name: 'Raihan', email: 'raihan@example.com', phone: '01712345678' },
        { name: 'Mohammad', email: 'mohammad@example.com', phone: '01887654321' },
        { name: 'Sara', email: 'sara@example.com', phone: '01923456789' }
    ]);

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userInfo.name && userInfo.email && userInfo.phone) {
            setCards(prevCards => [...prevCards, userInfo]);
            setUserInfo({ name: '', email: '', phone: '' });
        }
    };

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title> Profile | Gadget Heaven</title>
            </Helmet>
            <div className='text-white bg-[#9538E2] pb-5 space-y-5'>
                <h1 className="text-2xl md:text-3xl font-bold text-center pt-5">Profile</h1>
                <p className='w-[400px] lg:w-[700px] text-center mx-auto'>Creating your profile opens the door to tailored experiences and exclusive features. Build a unique presence, showcase your skills, and connect with like-minded individuals on our platform.
                </p>
            </div>
            <h1 className="text-2xl font-bold text-center pt-10">Create your profile on our website</h1>
            <form onSubmit={handleSubmit} className="mt-10 w-[350px] lg:w-[600px] mx-auto flex flex-col space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={userInfo.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={userInfo.email}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={userInfo.phone}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />
                <button type="submit" className="btn btn-primary mt-5 text-xl">Add Yor Profile</button>
            </form>
            <div className='text-center mt-5 space-y-5'>
                <hr />
                <h1 className='text-2xl lg:text-4xl text-[#9538E2] font-bold'>Profiles</h1>
                <hr />
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 ">
                {cards.map((card, index) => (
                    <div key={index} className="border p-4 rounded shadow-md bg-white">
                        <h2 className="text-xl font-semibold">Name: <span className='text-[#9538E2] font-bold'>{card.name}</span></h2>
                        <p>Email: {card.email}</p>
                        <p>Phone: {card.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
