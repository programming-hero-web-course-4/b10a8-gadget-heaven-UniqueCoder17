import React from 'react';
import bannerImg from "../../assets/banner.jpg";


const Banner = () => {
    return (
        <div>
            <section className="mx-auto">
                <div className="w-[300px] lg:w-[650px] my-5 mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn rounded-3xl px-6 font-bold">Shop Now</button>
                </div>
                <div className="relative mt-5 bg-gradient-to-b from-white to-[#9538E2] rounded-3xl shadow-lg p-2 lg:p-4 mx-auto w-fit">
                    <img 
                        className="h-[200px] w-[300px] lg:w-[800px] lg:h-[450px] rounded-3xl mx-auto shadow-lg"
                        src={bannerImg}
                        alt="Banner" 
                    />
                </div>
            </section>
        </div>
    );
};

export default Banner;