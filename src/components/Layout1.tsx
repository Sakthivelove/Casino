import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaHome, FaFish, FaDice, FaTable, FaVrCardboard, FaGamepad, FaGift, FaGamepad as FaGameIcon, FaCrown, FaQuestionCircle, FaFacebook, FaTwitter, FaTelegram, FaYoutube, FaCogs, FaUser, FaHandshake } from 'react-icons/fa';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="bg-[#140433] md:flex md:h-screen min-h-[100vh] h-full min-w-screen p-2 gap-2">
      {/* Sidebar */}
      <div className="md:w-[17%] w-full">
        <Sidebar />
      </div>

      {/* Dynamic Content */}
      <div className="md:w-[83%] w-full">
        {children}
      </div>

    </div>
  );
};

export default Layout;
