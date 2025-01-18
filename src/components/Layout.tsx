import React from "react";
import DynamicCard from "./DynamicCard";
import { FaUser, FaHome, FaFish, FaGamepad, FaCogs, FaGift, FaCrown, FaHandshake, FaQuestionCircle, FaFacebook, FaTwitter, FaTelegram, FaYoutube, FaGamepad as FaGameIcon } from 'react-icons/fa';

interface LayoutProps {
  centerContent: React.ReactNode;
  rightContent: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ centerContent, rightContent }) => {
  return (
    <div className="bg-[#140433] h-screen p-2">
      {/* Main Grid Layout */}
      <div className="grid grid-cols-[2fr_6fr_2fr] gap-2 rounded-lg h-full">
        {/* Left Section (Sidebar) */}
        <div className="flex flex-col gap-4 items-center">
          {/* First Element */}
          <div className="flex items-center gap-2 bg-[#23084B] p-1 rounded-md h-10 w-full">
            {/* Left Arrow Box */}
            <div className="bg-[#331D5A] p-2 rounded h-full flex items-center justify-center">
              <span className="text-white text-lg">←</span>
            </div>

            {/* Input Box */}
            <input
              type="text"
              placeholder="Search"
              className="bg-white text-[#140433] px-4 py-2 rounded font-bold w-full h-full"
            />
          </div>

          {/* Scrollable Sidebar Below the First Element */}
          <div className="bg-[#280A53] flex-grow p-2 rounded-md">
            <div className="grid grid-cols-2 gap-2">
              {/* Dynamic Cards in Sidebar */}
              <DynamicCard
                title="Wheel"
                IconComponent={FaUser}
                infoText="123"
                buttonLabel="Play Now"
                imageSrc="/WheelCard.png"
                backgroundColor="#280A53"
                imagePosition="bottom"
                showButton={false}
              />
              <DynamicCard
                title="Bonus"
                IconComponent={FaUser}
                infoText="10+ events"
                buttonLabel="Claim"
                imageSrc="/sports.png"
                backgroundColor="#23084B"
                imagePosition="bottom"
                cardHeight="150px"
                showButton={false}
              />
            </div>

            {/* Switch Section */}
            <div className="flex items-center justify-between bg-[#23084B] p-2 rounded mb-4">
              <div className="flex items-center gap-2 text-white cursor-pointer">
                <FaCogs />
                <span>Casino</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <FaGamepad />
                <span>Sports</span>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[48vh]">
              {/* Main Menu */}
              <div className="flex flex-col gap-1">
                <MenuItem icon={<FaHome />} text="Home" />
                <MenuItem icon={<FaFish />} text="Fishing Games" />
                <MenuItem icon={<FaGamepad />} text="Slot Games" />
                <MenuItem icon={<FaGamepad />} text="VR Games" />
                <MenuItem icon={<FaGamepad />} text="New Games" />
                <MenuItem icon={<FaGamepad />} text="Table Games" />
              </div>

              {/* Secondary Menu */}
              <div className="mt-4 p-2 bg-[#331D5A] rounded-md">
                <MenuItem icon={<FaGift />} text="Promotions" />
                <MenuItem icon={<FaCrown />} text="VIP" />
                <MenuItem icon={<FaHandshake />} text="Referral" />
                <MenuItem icon={<FaQuestionCircle />} text="Terms & Conditions" />
                <MenuItem icon={<FaQuestionCircle />} text="Support" />
                <MenuItem icon={<FaQuestionCircle />} text="FAQ" />
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center mt-6">
              <SocialIcon icon={<FaFacebook />} />
              <SocialIcon icon={<FaTwitter />} />
              <SocialIcon icon={<FaTelegram />} />
              <SocialIcon icon={<FaYoutube />} />
              <SocialIcon icon={<FaGameIcon />} />
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="overflow-auto">{centerContent}</div>

        {/* Right Section */}
        <div>{rightContent}</div>
      </div>
    </div>
  );
};


const MenuItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2 p-2 text-white hover:bg-[#331D5A] rounded cursor-pointer">
    <span>{icon}</span>
    <span>{text}</span>
  </div>
);

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-[#23084B] flex items-center justify-center text-white">
    {icon}
  </div>
);

export default Layout;