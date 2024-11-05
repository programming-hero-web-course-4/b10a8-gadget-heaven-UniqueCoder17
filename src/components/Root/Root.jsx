import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";

const Root = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div>
            <div className={isHomePage ? "text-white bg-[#9538E2] mx-1 lg:mx-8 mt-4 rounded-3xl h-[520px] lg:h-[550px] mb-32 lg:mb-80" : ""}>
                <NavBar />
                {isHomePage && <Banner />}
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;