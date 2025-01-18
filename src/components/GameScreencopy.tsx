import React from 'react';
import { FaUser } from 'react-icons/fa';
import DynamicCard from './DynamicCard';
import Layout from './Layout';

const GameScreen: React.FC = () => {
    // Center content for the page
    const centerContent = (
        //  Center Section 
        < div className="h-full flex flex-col gap-4" >
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
            <div className="bg-[#280A53] flex-grow p-2 rounded-md">
                {/* New Container Below the Center Section */}
                <div className="bg-[#280A53] p-4 rounded-md">
                    <div className="text-white text-lg">Additional Content Here</div>
                    {/* Dynamic Cards or other components */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <DynamicCard
                            title="Card Title 1"
                            IconComponent={FaUser}
                            infoText="Some info"
                            buttonLabel="Click Me"
                            imageSrc="/WheelCard.png"
                            backgroundColor="#280A53"
                            imagePosition="bottom"
                            showButton={true}
                        />
                        <DynamicCard
                            title="Card Title 2"
                            IconComponent={FaUser}
                            infoText="More info"
                            buttonLabel="Claim Now"
                            imageSrc="/sports.png"
                            backgroundColor="#23084B"
                            imagePosition="bottom"
                            showButton={true}
                        />
                    </div>
                </div>
            </div>
        </div >

    );

    // Right content can be passed similarly if needed
    const rightContent = (
        // Right Section
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
            <img src="./CasinoSlots.jpg" alt="Casino Slots" className="w-full h-1/3 rounded-md" />
            <img src="./Winner.jpg" alt="Winner" className="w-full h-1/3 rounded-md" />
            <img src="./winner2.jpg" alt="Winner 2" className="w-full h-1/3 rounded-md" />
          </div>
        </div>
      );
      

    // Using Layout component to render the page
    return (
        <Layout centerContent={centerContent} rightContent={rightContent} />
    );
};

export default GameScreen;
