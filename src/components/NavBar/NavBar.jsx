import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import bannerImg from "../../assets/banner.jpg";

const NavBar = () => {
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="statistics">Statistics</NavLink></li>
            <li><NavLink to="dashboard">Dashboard</NavLink></li>
        </>
    );

    return (
        <div className="text-white bg-[#9538E2] mx-1 lg:mx-8 mt-4 rounded-3xl h-[490px] lg:h-[550px] mb-32 lg:mb-72">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-400 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-1">
                    <button className="w-10 h-10 bg-white rounded-full"><NavLink><TiShoppingCart className="w-10 h-8 text-gray-600" /></NavLink></button>
                    <button className="w-10 h-10 bg-white rounded-full"><NavLink><FaRegHeart className="w-8 h-8 text-gray-600 ml-1" /></NavLink></button>
                </div>
            </div>
            <section className="mx-auto">
                <div className="w-[300px] lg:w-[650px] my-5 mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn rounded-3xl px-6 font-bold">Shop Now</button>
                </div>
                <div className="relative mt-5 bg-gradient-to-b from-white to-[#9538E2] rounded-3xl shadow-lg p-4 mx-auto w-fit">
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

export default NavBar;
