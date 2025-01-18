import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const UserProfile: React.FC = () => {
    const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => setProfilePhoto(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex h-full bg-[#280A53] rounded-md p-2 gap-1">
            {/* Left Container */}
            <div className="w-1/3 bg-[#1E0743] p-2 flex flex-col items-center gap-6 rounded-md">
                {/* Profile Photo */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                    {profilePhoto ? (
                        <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-gray-500 flex items-center justify-center text-white">
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
                <form className="flex flex-col gap-4 w-full">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-3 rounded-md bg-[#150434] text-white"
                    />
                    <input
                        type="text"
                        placeholder="Balance"
                        className="p-3 rounded-md bg-[#150434] text-white"
                    />
                    <button
                        type="button"
                        className="w-full p-3 text-white rounded-md"
                        style={{
                            background: 'linear-gradient(180deg, #9134FF 0%, #BA38F3 100%)',
                        }}
                    >
                        Logout
                    </button>
                    <button
                        type="button"
                        className="w-full p-3 text-white rounded-md"
                        style={{
                            background: 'linear-gradient(180deg, #98F118 0%, #38C40E 100%)',
                        }}
                    >
                        Delete Account
                    </button>
                </form>
            </div>

            {/* Right Container */}
            <div className="w-2/3 bg-[#1E0743] p-2 flex flex-col items-center relative gap-6">
                {/* Form */}
                <form className="flex flex-col gap-4 w-full">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="p-3 rounded-md bg-[#150434] text-white"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="p-3 rounded-md bg-[#150434] text-white"
                    />
                    <input
                        type="email"
                        placeholder="Email ID"
                        className="p-3 rounded-md bg-[#150434] text-white"
                    />
                    <button
                        type="button"
                        className="absolute bottom-6 left-6 px-6 py-3 text-white rounded-md"
                        style={{
                            background: 'linear-gradient(180deg, #9134FF 0%, #BA38F3 100%)',
                            fontSize: '16px',
                        }}
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
