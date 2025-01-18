import React from 'react';
import { FaUser, FaGamepad, FaFish } from 'react-icons/fa';
import DynamicCard from './DynamicCard';
import Layout from './Layout';
import GameSection from './GameSection';

const casinoCards = [
    { id: 1, title: 'Slot Game 1', image: './SlotGame1.jpg' },
    { id: 2, title: 'Slot Game 2', image: './SlotGame2.jpg' },
    { id: 3, title: 'Slot Game 3', image: './SlotGame3.png' },
    { id: 4, title: 'Slot Game 4', image: './SlotGame4.jpg' },
    { id: 5, title: 'Slot Game 5', image: './SlotGame5.jpg' },
    { id: 6, title: 'Slot Game 6', image: './SlotGame6.jpg' },
    { id: 7, title: 'Slot Game 7', image: './SlotGame7.jpg' },
];

const sportsCards = [
    { id: 1, title: 'Sports Game 1', image: './SportsGame1.jpg' },
    { id: 2, title: 'Sports Game 2', image: './SportsGame2.jpg' },
    { id: 3, title: 'Sports Game 3', image: './SportsGame3.jpg' },
];

const fishingCards = [
    { id: 1, title: 'Fishing Game 1', image: './SportsGame1.jpg' },
    { id: 2, title: 'Fishing Game 2', image: './SportsGame2.jpg' },
];

const GameScreen: React.FC = () => {
    // Center content for the page
    const centerContent = (
        <div className="h-full flex flex-col gap-4">
            <div className="flex gap-4">
                {/* Second Element */}
                <div className="flex items-center bg-[#331D5A] px-4 py-2 rounded gap-2 h-10 w-auto border border-[#EAAAFF80]">
                    <span className="text-white">🔍</span>
                    <input
                        type="text"
                        placeholder="Search for games"
                        className="bg-transparent text-white outline-none placeholder:text-gray-400 h-full"
                    />
                </div>

                {/* Third Element */}
                <div className="flex items-center justify-between bg-[#25084E] px-4 py-2 rounded-md h-10 w-auto border border-[#EAAAFF80]">
                    {/* Cryptocurrency Icon */}
                    <div className="text-yellow-500 text-lg mr-4">
                        <i>💰</i>
                    </div>

                    {/* 16-Digit Number */}
                    <div className="text-white text-lg mr-4">
                        1234 5678 9012 3456
                    </div>

                    {/* Button */}
                    <button className="px-4 py-1 rounded bg-gradient-to-b from-[#98F118] to-[#38C40E] text-white font-semibold text-sm">
                        Action
                    </button>
                </div>
            </div>
            <div className="bg-[#280A53] flex-grow p-2 rounded-md flex flex-col gap-2">
                {/* Banner Section */}
                <div className="w-full relative">
                    {/* Background Image */}
                    <img
                        src="/BannerImage.png"
                        alt="Banner"
                        className="w-full h-full object-cover rounded-md"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col items-start justify-center space-y-4 p-8">
                        <div className="text-left max-w-[50%]">
                            {/* Welcome Bonus Text */}
                            <h2 className="text-white text-3xl font-bold">Claim Welcome Bonus</h2>
                        </div>

                        {/* Buttons */}

                        {/* $1000 & 60 FS Button */}
                        <button
                            className="px-4 py-2 rounded-md text-white text-lg inline-block"
                            style={{
                                backgroundColor: "#FE3A81",
                                display: "inline-block", // Explicitly setting inline-block
                            }}
                        >
                            $1000 & 60 FS
                        </button>

                        {/* Claim Bonus Button */}
                        <button
                            className="px-4 py-2 rounded-md text-white text-lg inline-block"
                            style={{
                                background: "linear-gradient(180deg, #98F118 0%, #38C40E 100%)",
                                display: "inline-block", // Explicitly setting inline-block
                            }}
                        >
                            Claim Bonus
                        </button>


                    </div>


                </div>

                {/* Row of Larger Cards */}
                <div className="flex gap-1 w-full">
                    <DynamicCard
                        title="Wheel"
                        IconComponent={FaUser}
                        infoText="Spin to Win"
                        buttonLabel="Play Now"
                        imageSrc="/WheelCard.png"
                        backgroundColor="#280A53"
                        imagePosition="bottom"
                        cardWidth='w-1/3'
                        showButton={true}
                    />
                    <DynamicCard
                        title="Bonus"
                        IconComponent={FaUser}
                        infoText="Grab Your Bonus"
                        buttonLabel="Claim"
                        imageSrc="/BonusCards.png"
                        backgroundColor="#23084B"
                        imagePosition="bottom"
                        cardWidth='w-1/3'
                        showButton={true}
                    />
                    <DynamicCard
                        title="E-Sports"
                        IconComponent={FaUser}
                        infoText="Join the Action"
                        buttonLabel="Play"
                        imageSrc="/ESportsCards.png"
                        backgroundColor="#25084E"
                        imagePosition="bottom"
                        cardWidth='w-1/3'
                        showButton={true}
                    />
                </div>
                {/* Casino Section */}
                <div className="h-full flex flex-col gap-4">
                    <GameSection title="Casino" IconComponent={FaUser} cards={casinoCards} />
                    <GameSection title="Sports" IconComponent={FaGamepad} cards={sportsCards} />
                    <GameSection title="Fishing Games" IconComponent={FaFish} cards={fishingCards} />
                </div>
            </div>
        </div>
    );

    // Right content can be passed similarly if needed
    const rightContent = (
        <div className="flex flex-col gap-4 h-full">
            <div className="grid grid-cols-[4fr_1fr] gap-2 w-full">
                {/* Fourth Element */}
                <div className="flex items-center gap-2 bg-[#23084B] p-4 rounded-md h-10 w-full border border-[#EAAAFF80]">
                    <div className="w-6 h-6 rounded-full bg-[#98F118] flex items-center justify-center">
                        <span className="text-[#140433] font-bold">A</span>
                    </div>
                    <span className="text-white">Username</span>
                </div>

                {/* Fifth Element */}
                <div className="bg-[#331D5A80] p-2 rounded flex items-center justify-center h-10 w-full">
                    <span className="text-white text-lg">⚙️</span>
                </div>
            </div>

            {/* Second Section with Images */}
            <div className="bg-[#25084E] flex-grow p-2 rounded-md flex flex-col gap-2">
                <img src="/CasinoSlots.jpg" alt="Casino Slots" className="w-full h-1/3 rounded-md" />
                <img src="/Winner.jpg" alt="Winner" className="w-full h-1/3 rounded-md" />
                <img src="/winner2.jpg" alt="Winner 2" className="w-full h-1/3 rounded-md" />
            </div>
        </div>
    );

    // Using Layout component to render the page
    return <Layout centerContent={centerContent} rightContent={rightContent} />;
};



export default GameScreen;
