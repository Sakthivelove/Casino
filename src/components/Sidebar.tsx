import React from 'react';
import { FaHome, FaFish, FaGamepad, FaGift, FaGamepad as FaGameIcon, FaCrown, FaQuestionCircle, FaFacebook, FaTwitter, FaTelegram, FaYoutube, FaCogs, FaUser, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DynamicCard from './DynamicCard';
// import MenuItem from './MenuItem';
// import SocialIcon from './SocialIcon';

const Sidebar = () => {
  return (
    <div className='h-full flex flex-col'>
      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-[#23084B] rounded-md mb-4">
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
      </div>

      <div className='bg-[#280A53] p-2 flex-grow rounded-md'>
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
        <div className="flex flex-col gap-2 overflow-y-auto max-h-[47vh]">
          <div className="flex flex-col gap-1">
            <MenuItem icon={<FaHome />} text="Home" route="/" />
            <MenuItem icon={<FaFish />} text="Fishing Games" route="/fishing-games" />
            <MenuItem icon={<FaGamepad />} text="Slot Games" route="/slot-games" />
            <MenuItem icon={<FaGamepad />} text="VR Games" route="/vr-games" />
            <MenuItem icon={<FaGift />} text="Promotions" route="/promotions" />
            <MenuItem icon={<FaQuestionCircle />} text="Support" route="/support" />
          </div>
          {/* Secondary Menu */}
          <div className="mt-4 p-2 bg-[#331D5A] rounded-md">
            <MenuItem icon={<FaGift />} text="Promotions" route="/" />
            <MenuItem icon={<FaCrown />} text="VIP" route="/" />
            <MenuItem icon={<FaHandshake />} text="Referral" route="/" />
            <MenuItem icon={<FaQuestionCircle />} text="Terms & Conditions" route="/" />
            <MenuItem icon={<FaQuestionCircle />} text="Support" route="/" />
            <MenuItem icon={<FaQuestionCircle />} text="FAQ" route="/" />
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
  );
};

const MenuItem: React.FC<{ icon: React.ReactNode; text: string; route: string }> = ({ icon, text, route }) => (
  <Link to={route} className="flex items-center gap-2 p-2 text-white hover:bg-[#331D5A] rounded cursor-pointer">
    <span>{icon}</span>
    <span>{text}</span>
  </Link>
);

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="w-10 h-10 rounded-full bg-[#23084B] flex items-center justify-center text-white">
    {icon}
  </div>
);

export default Sidebar;
