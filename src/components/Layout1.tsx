import React from 'react';
import Sidebar from './Sidebar';
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#140433] flex h-screen p-2 gap-2">
      {/* Sidebar */}
      <div className="w-[20%]">
        <Sidebar />
      </div>

      {/* Dynamic Content */}
      <div className="w-[80%]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
