import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCartList, getStoredWishList } from '../../utility/addToDb';

const Dashboard = () => {
    const [cartList, setCartList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [view, setView] = useState('cart');
    const [totalCost, setTotalCost] = useState(0);
    const allGadgets = useLoaderData();

    useEffect(() => {
        const updateCartList = () => {
            const storedCartList = getStoredCartList();
            const storedCartListInt = storedCartList.map(id => parseInt(id));
            const cartGadgetList = allGadgets.filter(gadget => storedCartListInt.includes(gadget.product_id));
            setCartList(cartGadgetList);
        };

        const updateWishList = () => {
            const storedWishList = getStoredWishList();
            const storedWishListInt = storedWishList.map(id => parseInt(id));
            const wishGadgetList = allGadgets.filter(gadget => storedWishListInt.includes(gadget.product_id));
            setWishList(wishGadgetList);
        };

        updateCartList();
        updateWishList();
    }, [allGadgets]);

    useEffect(() => {
        const list = view === 'cart' ? cartList : wishList;
        setTotalCost(list.reduce((total, gadget) => total + gadget.price, 0));
    }, [cartList, wishList, view]);

    const handleDelete = (id) => {
        if (view === 'cart') {
            const updatedCartList = cartList.filter(gadget => gadget.product_id !== id);
            setCartList(updatedCartList);
            alert('Item removed from cart');
        } else if (view === 'wishlist') {
            const updatedWishList = wishList.filter(gadget => gadget.product_id !== id);
            setWishList(updatedWishList);
            alert('Item removed from wishlist');
        }
    };

    const handleSortByPrice = () => {
        const sortedList = [...(view === 'cart' ? cartList : wishList)].sort((a, b) => b.price - a.price);
        view === 'cart' ? setCartList(sortedList) : setWishList(sortedList);
    };

    const handlePurchase = () => {
        if (totalCost > 0) {
            if (view === 'cart') {
                setCartList([]);
            } else if (view === 'wishlist') {
                setWishList([]);
            }
            setTotalCost(0);
            document.getElementById('my_modal_1').showModal();
        } else {
            alert('Please add items to purchase.');
        }
    };

    return (
        <div>
            <div className='text-white bg-[#9538E2] pb-5 space-y-5'>
                <h1 className="text-2xl md:text-3xl font-bold text-center pt-5">Dashboard</h1>
                <p className='w-[400px] lg:w-[650px] text-center mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='text-center'>
                    <button className='btn px-10 mr-5 py-1 rounded-3xl' onClick={() => setView('cart')}>Cart</button>
                    <button className='btn px-10 py-1 rounded-3xl' onClick={() => setView('wishlist')}>Wishlist</button>
                </div>
            </div>

            <div className='w-11/12 mx-auto'>
                <div className="flex justify-end mt-5 px-5 items-center space-x-3">
                    <h1 className="text-2xl font-bold mr-[750px]">{view === 'cart' ? 'Cart' : 'Wishlist'}</h1>

                    <button className="btn text-2xl font-bold rounded-full px-5">
                        Total cost: ${totalCost}
                    </button>

                    <button onClick={handleSortByPrice} className="btn btn-outline text-[#9538E2] rounded-full px-5">
                        Sort by Price
                    </button>

                    <button onClick={handlePurchase} className="btn btn-outline text-[#9538E2] rounded-full px-5">
                        Purchase
                    </button>
                </div>

                <div className="flex flex-col items-center p-5 space-y-4 mt-10">
                    {(view === 'cart' ? cartList : wishList).map(gadget => (
                        <div key={gadget.product_id} className="w-full max-w-3xl border p-4 rounded-lg shadow-md flex items-center justify-between">
                            {/* Product Details */}
                            <div className="flex items-center space-x-4 flex-grow">
                                <img src={gadget.product_image} alt={gadget.product_title} className="w-20 h-20 rounded-lg object-cover" />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold">{gadget.product_title}</h2>
                                    <p className="text-sm text-gray-600">{gadget.description}</p>
                                    <p className="text-lg font-bold text-[#9538E2] mt-2">Price: ${gadget.price}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleDelete(gadget.product_id)}
                                className="btn btn-error px-4 py-1 text-white rounded-full"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Purchase Modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-xl text-center">Thank You!</h3>
                    <p className="py-4 text-center">Your purchase was successful!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-[#9538E2]">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;
