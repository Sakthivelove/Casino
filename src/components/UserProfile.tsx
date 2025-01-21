import React, { useState } from 'react';
import { FaCamera, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
    const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
    const navigate = useNavigate()

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => setProfilePhoto(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleClose = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="flex flex-col md:flex-row h-full bg-[#280A53] rounded-md p-2 gap-2">
            {/* Left Container (hidden on mobile) */}
            <div className="hidden md:flex w-1/4 bg-[#1E0743] p-2 flex-col items-center gap-4 rounded-md">
                {/* Profile Photo */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white">
                    {profilePhoto ? (
                        <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gray-500 flex items-center justify-center text-white text-sm">
                            No Image
                        </div>
                    )}
                    <label
                        htmlFor="profile-upload"
                        className="absolute bottom-2 right-2 bg-[#9134FF] text-white p-2 rounded-full cursor-pointer"
                    >
                        <FaCamera />
                        <input
                            id="profile-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-3 w-full">
                    <label htmlFor="name" className="text-white text-sm">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        className="p-2 rounded-md bg-[#150434] text-white text-sm"
                    />
                    <label htmlFor="balance" className="text-white text-sm">
                        Balance
                    </label>
                    <input
                        id="balance"
                        type="text"
                        placeholder="Balance"
                        className="p-2 rounded-md bg-[#150434] text-white text-sm"
                    />
                </form>
            </div>

            {/* Right Container */}
            <div className="flex flex-col w-full md:w-3/4 bg-[#1E0743] p-2 items-center gap-4 rounded-md">

                {/* Close Icon for Mobile */}
                <button
                    className="absolute top-5 right-5 text-white md:hidden"
                    onClick={handleClose}
                >
                    <FaTimes size={16} />
                </button>
                {/* Profile Photo for Mobile */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white md:hidden">
                    {profilePhoto ? (
                        <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gray-500 flex items-center justify-center text-white text-xs">
                            No Image
                        </div>
                    )}
                    <label
                        htmlFor="profile-upload-mobile"
                        className="absolute bottom-2 right-2 bg-[#9134FF] text-white p-2 rounded-full cursor-pointer"
                    >
                        <FaCamera />
                        <input
                            id="profile-upload-mobile"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-3 w-full">
                    <label htmlFor="first-name" className="text-white text-sm">
                        First Name
                    </label>
                    <input
                        id="first-name"
                        type="text"
                        placeholder="First Name"
                        className="p-2 rounded-md bg-[#150434] text-white text-sm"
                    />
                    <label htmlFor="last-name" className="text-white text-sm">
                        Last Name
                    </label>
                    <input
                        id="last-name"
                        type="text"
                        placeholder="Last Name"
                        className="p-2 rounded-md bg-[#150434] text-white text-sm"
                    />
                    <label htmlFor="email" className="text-white text-sm">
                        Email ID
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email ID"
                        className="p-2 rounded-md bg-[#150434] text-white text-sm"
                    />
                    <button
                        type="button"
                        className="self-end px-4 py-2 text-white rounded-md"
                        style={{
                            background: "linear-gradient(180deg, #9134FF 0%, #BA38F3 100%)",
                            fontSize: "14px",
                        }}
                    >
                        Update
                    </button>
                </form>

                {/* Bottom Menu for Mobile */}
                <div className="fixed bottom-0 w-full flex justify-evenly bg-[#14043380] p-2 md:hidden">
                    <button
                        className="text-white p-2 rounded-md"
                        style={{
                            background: "linear-gradient(180deg, #9134FF 0%, #BA38F3 100%)",
                            fontSize: "12px",
                        }}
                    >
                        Logout
                    </button>
                    <button
                        className="text-white p-2 rounded-md"
                        style={{
                            background: "linear-gradient(180deg, #98F118 0%, #38C40E 100%)",
                            fontSize: "12px",
                        }}
                    >
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
