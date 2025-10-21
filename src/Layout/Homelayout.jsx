import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";


const Homelayout = () => {
    return (
        <div className=" text-white bg-gradient-to-r from-[#020024] via-[#093A79] to-[#2F58C2] ">

            <Navbar />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Homelayout;






