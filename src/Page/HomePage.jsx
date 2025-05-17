import React from 'react';
import Hero from '../Component/Home/Hero';
import Features from '../Component/Home/Features';
import CTA from '../Component/Home/CTA';
import Navbar from '../Component/Home/Navbar';
import How from '../Component/Home/How';
import Token from '../Component/Home/Token';
import Testimonilas from '../Component/Home/Testimonilas';

const HomePage = () => {
    return (
        <div className="bg-white text-gray-800 font-sans">
            <Navbar/>
            <Hero/>
            <Features/>
            <How/>
            <Token/>
            <Testimonilas/>
            <CTA/>
        </div>
    );
}

export default HomePage;
