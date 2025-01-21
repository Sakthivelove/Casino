import React, { useState } from 'react';
import { FaHome, FaFish, FaBars, FaTimes, FaDice, FaTable, FaVrCardboard, FaGamepad, FaGift, FaGamepad as FaGameIcon, FaCrown, FaQuestionCircle, FaFacebook, FaTwitter, FaTelegram, FaYoutube, FaCogs, FaUser, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DynamicCard from './DynamicCard';
import { useMenu } from '../context/MenuContext';
import { useNavigate } from 'react-router-dom';
// import MenuItem from './MenuItem';
// import SocialIcon from './SocialIcon';

const Sidebar = () => {
  const { selectedMenu, setSelectedMenu } = useMenu(); // Access context
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility
  const [prevSelectedMenu, setPrevSelectedMenu] = useState<string>("Casino"); // Track previous menu
  const [selectedTab, setSelectedTab] = useState("Casino");

  const navigate = useNavigate()
  const handleMenuClick = (menu: string) => {
    setPrevSelectedMenu(selectedMenu); // Store the current menu as the previous menu
    setSelectedMenu(menu); // Update the selected menu
    menu === "Menu" ? setIsSidebarOpen(true) : setIsSidebarOpen(false)
  };


  const toggleSidebar = () => {
    if (isSidebarOpen && selectedMenu === "Menu") {
      setSelectedMenu(prevSelectedMenu); // Restore the previous menu
    }
    setIsSidebarOpen(false); // Close the sidebar
  };

  console.log("isSidebarOpen", isSidebarOpen);

  return (
    <div>
      <div className='hidden md:block md:h-full md:flex md:flex-col'>
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-[#23084B] rounded-md mb-2">
          {/* First Element */}
          <div className="flex items-center gap-2 bg-[#23084B] p-1 rounded-md h-10 w-full">
            {/* Left Arrow Box */}
            <div className="hidden md:block md:bg-[#331D5A] md:p-2 md:rounded md:h-full md:flex md:items-center md:justify-center">
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
        <div className='relative bg-[#280A53] p-2 flex-grow rounded-md'>
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
          <div className="flex items-center justify-between bg-[#23084B] m-2 rounded mb-4">
            {/* Casino Tab */}
            <div
              className={`flex items-center gap-2 cursor-pointer px-2 py-2 rounded-md ${selectedTab === "Casino"
                  ? "bg-gradient-to-b from-[#9134FF] to-[#BA38F3] text-white"
                  : "text-gray-400"
                }`}
              onClick={() => setSelectedTab("Casino")}
            >
              <FaCogs />
              <span>Casino</span>
            </div>

            {/* Sports Tab */}
            <div
              className={`flex items-center gap-2 cursor-pointer px-2 py-2 rounded-md ${selectedTab === "Sports"
                  ? "bg-gradient-to-b from-[#9134FF] to-[#BA38F3] text-white"
                  : "text-gray-400"
                }`}
              onClick={() => setSelectedTab("Sports")}
            >
              <FaGamepad />
              <span>Sports</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-2 overflow-y-auto md:max-h-[63vh] 2xl:max-h-full">
            <div className="flex flex-col gap-1">
              <MenuItem icon={<FaHome />} text="Home" route="/" targetSection={null} />
              <MenuItem icon={<FaHome />} text="Casino" targetSection="casino" />
              <MenuItem icon={<FaFish />} text="Fishing Games" targetSection="fishing-games" />
              <MenuItem icon={<FaGamepad />} text="Slot Games" targetSection="slot-games" />
              <MenuItem icon={<FaGamepad />} text="VR Games" targetSection="vr-games" />
              <MenuItem icon={<FaGift />} text="Promotions" targetSection="promotions" />
              <MenuItem icon={<FaQuestionCircle />} text="Support" targetSection="support" />
            </div>
            {/* Secondary Menu */}
            <div className="mt-4 mb-8 p-2 bg-[#331D5A] rounded-md">
              <MenuItem icon={<FaGift />} text="Promotions" targetSection="/" />
              <MenuItem icon={<FaCrown />} text="VIP" targetSection="/" />
              <MenuItem icon={<FaHandshake />} text="Referral" targetSection="/" />
              <MenuItem icon={<FaQuestionCircle />} text="Terms & Conditions" targetSection="/" />
              <MenuItem icon={<FaQuestionCircle />} text="Support" targetSection="/" />
              <MenuItem icon={<FaQuestionCircle />} text="FAQ" targetSection="/" />
            </div>
          </div>
          {/* Social Icons */}
          <div className="absolute bottom-1 flex gap-2 justify-center flex-wrap">
            <SocialIcon icon={<FaFacebook />} />
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaTelegram />} />
            <SocialIcon icon={<FaYoutube />} />
            <SocialIcon icon={<FaGameIcon />} />
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="md:hidden fixed bottom-0 w-screen flex items-center justify-around bg-[#23084B] p-2 z-50">
        {[
          { name: "Casino", icon: FaHome },
          { name: "Slot", icon: FaDice },
          { name: "Fishing", icon: FaFish },
          { name: "Table", icon: FaTable },
          { name: "VR", icon: FaVrCardboard },
          { name: "Menu", icon: FaBars }
        ].map(({ name, icon: Icon }) => (
          <div
            key={name}
            className={`flex flex-col items-center p-2 ${selectedMenu === name
              ? "bg-[#FE3A81] rounded-md" // Highlight selected menu with background color
              : ""
              }`}
            // className={`flex flex-col items-center p-2 ${selectedMenu === name
            //     ? "bg-[#FE3A81] text-white rounded-md" // Change text color to white when selected
            //     : "text-gray-500" // Set text color to gray for non-selected items
            //   }`}

            onClick={() => handleMenuClick(name)}
          >
            <Icon className="text-white text-lg" />
            <span className="text-white text-xs">{name}</span>
          </div>
        ))}
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 w-full h-full bg-[#23084B] z-40 flex flex-col p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white text-lg">Menu</span>
            <button onClick={toggleSidebar}>
              <FaTimes className="text-white text-2xl" />
            </button>
          </div>
          <div className='overflow-y-auto'>
            <div className="flex flex-col gap-2">
              {/* Mobile Menu Items */}
              <MenuItem icon={<FaHome />} text="Home" targetSection="#" />
              <MenuItem icon={<FaFish />} text="Fishing Games" targetSection="#" />
              <MenuItem icon={<FaGamepad />} text="Slot Games" targetSection="#" />
              <MenuItem icon={<FaGamepad />} text="VR Games" targetSection="#" />
              <MenuItem icon={<FaGift />} text="Promotions" targetSection="#" />
              <MenuItem icon={<FaQuestionCircle />} text="Support" targetSection="#" />
            </div>
            {/* Secondary Menu */}
            <div className="mt-4 mb-8 p-2 bg-[#331D5A] rounded-md">
              <MenuItem icon={<FaGift />} text="Promotions" targetSection="#" />
              <MenuItem icon={<FaCrown />} text="VIP" targetSection="#" />
              <MenuItem icon={<FaHandshake />} text="Referral" targetSection="#" />
              <MenuItem icon={<FaQuestionCircle />} text="Terms & Conditions" targetSection="#" />
              <MenuItem icon={<FaQuestionCircle />} text="Support" targetSection="#" />
              <MenuItem icon={<FaQuestionCircle />} text="FAQ" targetSection="#" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};


const MenuItem: React.FC<{ icon: React.ReactNode; text: string; targetSection: string | null; route?: string }> = ({
  icon,
  text,
  targetSection,
  route
}) => {
  const handleScroll = () => {
    if (targetSection) {
      const section = document.getElementById(targetSection);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return route ? (
    // For "Home" or other route-based navigation
    <Link to={route} className="flex items-center gap-2 p-2 text-white hover:bg-[#331D5A] rounded cursor-pointer">
      <span>{icon}</span>
      <span>{text}</span>
    </Link>
  ) : (
    // For jump-to-section functionality
    <div
      onClick={handleScroll}
      className="flex items-center gap-2 p-2 text-white hover:bg-[#331D5A] rounded cursor-pointer"
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
};



const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="w-6 h-6 rounded-full bg-[#23084B] flex items-center justify-center text-white">
    {icon}
  </div>
);

export default Sidebar;
