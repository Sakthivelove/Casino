import React from 'react';

const FullPageBanner = () => {
    return (
        <div className="relative w-full h-full">
            <img
                src="/BannerImage.png"
                alt="Full Page Banner"
                className="w-full h-full object-fit"
            />

           
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-start justify-center space-y-8 p-12">
                <div className="text-left max-w-[60%]">
                    {/* Welcome Bonus Text */}
                    <h2 className="text-white text-7xl font-extrabold leading-tight">
                        Claim <br />
                        Welcome Bonus
                    </h2>
                </div>

                {/* Buttons */}
                <div className="flex flex-col space-y-24">
                    {/* $1000 & 60 FS Button */}
                    <button
                        className="px-8 py-4 rounded-md text-white text-2xl font-semibold"
                        style={{
                            backgroundColor: "#FE3A81",
                        }}
                    >
                        $1000 & 60 FS
                    </button>

                    {/* Claim Bonus Button */}
                    <button
                        className="px-8 py-4 rounded-md text-white text-2xl font-semibold"
                        style={{
                            background: "linear-gradient(180deg, #98F118 0%, #38C40E 100%)",
                        }}
                    >
                        Claim Bonus
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FullPageBanner;
