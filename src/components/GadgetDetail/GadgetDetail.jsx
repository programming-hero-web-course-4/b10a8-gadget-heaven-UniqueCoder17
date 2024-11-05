import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { addTOStoredCartList, addTOStoredWishList } from '../../utility/addToDb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GadgetDetail = () => {
    const { product_id } = useParams();
    const id = parseInt(product_id);
    const data = useLoaderData();

    const gadget = data.find(gadget => gadget.product_id === id);
    const { product_image, product_title, price, description, Specification, rating } = gadget;

    const handleCart = (id) => {
        addTOStoredCartList(id);
        toast.success(`${product_title} added to Cart`);
    }

    const handleWish = (id) => {
        addTOStoredWishList(id);
        toast.success(`${product_title} added to Wishlist`);
    }

    return (
        <div>
            <section className="mx-auto h-[450px] lg:h-[400px] bg-[#9538E2] mb-[550px] lg:mb-[300px]">
                <div className="w-[300px] lg:w-[650px] mx-auto text-center">
                    <h1 className="text-white text-2xl md:text-4xl font-bold mb-4 pt-5">Product Details</h1>
                    <p className="text-white mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="relative mt-5">
                    <div className='flex flex-col lg:flex-row w-[300px] bg-white lg:w-[820px] border-2 mx-auto mb-10 p-4 rounded-3xl'>
                        <div className='border-2 rounded-3xl mr-0 lg:mr-4'>
                            <img className='w-[400px] h-[250px] lg:h-[400px] rounded-3xl' src={product_image} alt="" />
                        </div>
                        <div className='space-y-2 mt-4 lg:mt-0'>
                            <h1 className='text-2xl lg:text-4xl font-bold'>{product_title}</h1>
                            <p className='text-sm lg:text-lg font-bold'>Price: ${price}</p>
                            <button className="btn btn-outline text-[#2f9c08e8] rounded-3xl">In Stock</button>
                            <p>{description}</p>
                            <p className='font-bold'>Specification:</p>
                            <ol className='space-y-1'>
                                {Specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ol>
                            <p className='font-bold'>Rating⭐</p>
                            <div className='flex items-center'>
                                <div className="rating mx-2">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                                </div>
                                <div>
                                    <button className='btn rounded-full font-bold'>{rating}</button>
                                </div>
                            </div>
                            <div className='flex'>
                                <button onClick={() => handleCart(product_id)} className='flex mr-4 text-white bg-[#9538E2] py-1 px-2 rounded-2xl font-bold'>Add To Cart <TiShoppingCart className="w-8 h-6 text-white" /></button>
                                <button onClick={() => handleWish(product_id)}><FaRegHeart className="w-6 h-6 text-gray-600 ml-1" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default GadgetDetail;
