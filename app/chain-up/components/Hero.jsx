import React from 'react';
import ChainUpHeroBg from '../../../public/assets/chain-up-hero-bg.png';

const Hero = () => {
    return (
        <div
            className="bg-cover bg-center h-screen w-full"
            style={{ backgroundImage: `url(${ChainUpHeroBg.src})` }}
        >
            <div className="flex items-center justify-center h-full">
                <h1 className="text-white text-4xl font-bold">
                    Welcome to the Hero Section
                </h1>
            </div>
        </div>
    );
};

export default Hero;
