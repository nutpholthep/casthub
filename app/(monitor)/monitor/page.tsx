'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MonitorPage = () => {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            setIsPortrait(window.innerHeight > window.innerWidth);
        };

        // Initial check
        checkOrientation();

        // Add event listener for orientation changes
        window.addEventListener('resize', checkOrientation);
        return () => window.removeEventListener('resize', checkOrientation);
    }, []);

    return (
        <div className="fixed w-screen h-screen overflow-hidden">
            <div className="relative w-full h-full">
                <Image
                    className="w-full h-full object-cover relative"
                    src="https://images.unsplash.com/photo-1526421515403-b7e0ae86ee4f?q=80&w=2000&auto=format&fit=crop"
                    alt="Display content"
                    width={1920}
                    height={1080}
                    loading='lazy'
                    lazyBoundary='200px'
                />

                {/* Animated Glow Effect */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-500/30 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-orange-400/20 to-transparent animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 text-center">
                    <div className="relative inline-block">
                        <p className={`font-bold text-white relative z-10 ${isPortrait ? 'text-4xl' : 'text-6xl'}`}>
                            Display Content
                        </p>

                        <div className="absolute -bottom-1 left-0 w-full h-2 bg-orange-500/70 rounded-full blur-md animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonitorPage;