import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaGamepad, FaFish, FaChevronDown, FaArrowUp, FaSearch,FaBitcoin } from 'react-icons/fa';
import DynamicCard from "./DynamicCard"
import GameSection from "./GameSection"
import { useMenu } from '../context/MenuContext';

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

// Define a type for the props of GameScreen
// interface GameScreenProps {
//     selectedMenu: string; // This ensures selectedMenu is a string
// }

const GameScreen: React.FC = () => {
    const userProfileImage = "";  // Simulates no profile image
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile'); // Navigate to the profile page
    };


    const { selectedMenu } = useMenu(); // Access the selected menu from context
    const [showImageContent, setShowImageContent] = useState(false);

    // Toggle the image content visibility
    const handleButtonClick = () => {
        setShowImageContent(true);
    };

    // Close the image content modal
    const handleCloseImage = () => {
        setShowImageContent(false);
    };

    const [showGoToTop, setShowGoToTop] = useState(false);

    // Toggle visibility of "Go to Top" button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToTopOfSection = () => {
        const centerSection = document.querySelector(".overflow-auto");
        if (centerSection) {
            centerSection.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // const [activeSection, setActiveSection] = useState(selectedMenu);

    // useEffect(() => {
    //     setActiveSection(selectedMenu); // Update active section when selectedMenu changes
    // }, [selectedMenu]);

    // const handleSectionChange = (section: string) => {
    //     setActiveSection(section);
    //     const sectionElement = document.getElementById(section);
    //     if (sectionElement) {
    //         sectionElement.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <div className="grid md:grid-cols-[6fr_2fr] grid-cols-1 gap-2 rounded-lg h-full">
            <div className="relative overflow-auto">
                <div className="flex md:gap-4 gap-2">
                    {/* Second Element */}
                    <div className="hidden md:flex items-center bg-[#331D5A] px-4 py-2 rounded gap-2 h-10 w-auto border border-[#EAAAFF80]">
                        <FaSearch className="text-white" />
                        <input
                            type="text"
                            placeholder="Search for games"
                            className="bg-transparent text-white outline-none placeholder:text-gray-400 h-full flex-1"
                        />
                    </div>

                    {/* Input Box */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="md:hidden block bg-white text-[#140433] px-4 py-2 rounded font-bold w-full md:h-full text-xs"
                    />


                    {/* Third Element */}
                    <div className="flex items-center justify-between bg-[#25084E] md:px-4 px-1 py-2 rounded-md h-10 w-auto border border-[#EAAAFF80] md:gap-2">
                        {/* Cryptocurrency Icon */}
                        <div className="text-yellow-500 md:text-lg text-xs">
                        <FaBitcoin /> {/* Replaced 💰 with a library icon */}
                        </div>

                        {/* 16-Digit Number */}
                        <div className="hidden md:block text-white md:text-lg text-sm">
                            1234 5678 9012 3456
                        </div>

                        {/* 16-Digit Number */}
                        <div className="block md:hidden text-white md:text-lg text-xs">
                            123456789012
                        </div>

                        {/* Button */}
                        <button className="md:px-4 px-1 py-1 rounded bg-gradient-to-b from-[#98F118] to-[#38C40E] text-white font-semibold text-sm">
                            Action
                        </button>
                    </div>

                    {/* Profile and Down Arrow for Mobile */}
                    <div
                        onClick={handleProfileClick}
                        className="flex items-center gap-2 bg-[#23084B] p-2 rounded-md h-10 md:hidden w-auto"
                    > {/* Visible only on mobile */}
                        <div className="w-6 h-6 rounded-full bg-[#98F118] flex items-center justify-center">
                            {/* If user profile image is available, display it, else show FaUser icon */}
                            {userProfileImage ? (
                                <img
                                    src={userProfileImage}
                                    alt="User Profile"
                                    className="w-full h-full object-cover rounded-full"
                                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} // Hide the image if error
                                />
                            ) : (
                                <FaUser className="text-[#140433] font-bold text-lg" /> // Fallback to FaUser icon
                            )}
                        </div>
                        <FaChevronDown className="text-white text-xs" /> {/* Down Arrow Icon */}
                    </div>
                </div>
                <div className="bg-[#280A53] flex-grow p-2 rounded-md flex flex-col gap-2 mt-2">
                    <div className={`${selectedMenu !== "Casino" && "hidden md:block"}`}>
                        {/* Banner Section */}
                        <div className="w-full relative mb-4">
                            {/* Background Image */}
                            <img
                                src="/BannerImage.png"
                                alt="Banner"
                                className="w-full md:h-full h-[40vh] md:object-cover rounded-md"
                            />
                            {/* Overlay Content */}
                            <div className="absolute inset-0 flex flex-col items-start justify-center md:space-y-4 space-y-2 p-8">
                                <div className="text-left max-w-[50%]">
                                    {/* Welcome Bonus Text */}
                                    <h2 className="text-white md:text-3xl font-bold">Claim Welcome Bonus</h2>
                                </div>
                                {/* Buttons */}
                                {/* $1000 & 60 FS Button */}
                                <button
                                    className="px-4 py-2 rounded-md text-white md:text-lg text-xs inline-block"
                                    style={{
                                        backgroundColor: "#FE3A81",
                                        display: "inline-block", // Explicitly setting inline-block
                                    }}
                                >
                                    $1000 & 60 FS
                                </button>
                                {/* Claim Bonus Button */}
                                <button
                                    className="px-4 py-2 rounded-md text-white md:text-lg text-xs inline-block"
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
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 w-full">
                            <DynamicCard
                                title="Wheel"
                                IconComponent={FaUser}
                                infoText="Spin to Win"
                                buttonLabel="Play Now"
                                imageSrc="/WheelCard.png"
                                backgroundColor="#280A53"
                                imagePosition="bottom"
                                cardHeight="md:h-[25vh]"
                                popUpImage="/WheelHover.png"
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
                                cardHeight="md:h-[25vh]"
                                popUpImage="/BonusHover.png"
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
                                cardHeight="md:h-[25vh]"
                                popUpImage="/esportsHover.png"
                                showButton={true}
                            />
                        </div>
                    </div>
                    {/* Casino Section */}

                    <div className="hidden md:block">
                        <div id="casino">
                            <GameSection title="Casino" IconComponent={FaUser} cards={casinoCards} />
                        </div>
                        <div id="sports">
                            <GameSection title="Sports" IconComponent={FaGamepad} cards={sportsCards} />
                        </div>
                        <div id="fishing-games">
                            <GameSection title="Fishing Games" IconComponent={FaFish} cards={fishingCards} />
                        </div>
                    </div>
                    {/* <div id="slot-games">
                        <GameSection title="Slot Games" IconComponent={FaGamepad} cards={slotCards} />
                    </div> */}



                    {/* Mobile screens */}
                    <div className="md:hidden">
                        {/* Render Game Sections based on the selected menu for mobile */}
                        {selectedMenu === 'Casino' && (
                            <>
                                <GameSection title="Casino" IconComponent={FaUser} cards={casinoCards} />
                                {/* Additional content for mobile under Casino */}
                                <div> {/* Other content for Casino */} </div>
                            </>
                        )}

                        {selectedMenu === 'Slot' && (
                            <>
                                <GameSection title="Sports" IconComponent={FaGamepad} cards={sportsCards} />
                                {/* Additional content for mobile under Sports */}
                                <div> {/* Other content for Sports */} </div>
                            </>
                        )}

                        {selectedMenu === 'Fishing' && (
                            <>
                                <GameSection title="Fishing Games" IconComponent={FaFish} cards={fishingCards} />
                                {/* Additional content for mobile under Fishing Games */}
                                <div> {/* Other content for Fishing Games */} </div>
                            </>
                        )}
                    </div>
                </div>

                {/* "Go to Top" Button */}
                {showGoToTop && (
                    <button
                        onClick={scrollToTopOfSection}
                        className="fixed bottom-4 right-4 p-3 bg-[#280A53] text-white rounded-full shadow-lg hover:bg-[#FE3A81] transition-all"
                        aria-label="Go to top"
                    >
                        <FaArrowUp className="text-lg" />
                    </button>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <div className="md:grid md:grid-cols-[4fr_1fr] md:gap-2 md:w-full w-auto">

                    {/* Full Profile and Settings for Desktop */}
                    <div
                        className="flex items-center gap-2 bg-[#23084B] p-4 rounded-md h-10 w-full border border-[#EAAAFF80] md:flex hidden cursor-pointer"
                        onClick={handleProfileClick} // On click, navigate to the profile
                    >
                        <div className="w-6 h-6 rounded-full bg-[#98F118] flex items-center justify-center">
                            {userProfileImage ? (
                                <img
                                    src={userProfileImage}
                                    alt="User Profile"
                                    className="w-full h-full object-cover rounded-full"
                                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} // Hide image on error
                                />
                            ) : (
                                <FaUser className="text-[#140433] font-bold text-lg" />
                            )}
                        </div>

                        <span className="text-white">Username</span>
                    </div>

                    {/* Settings Icon for Desktop */}
                    <div className="bg-[#331D5A80] p-2 rounded flex items-center justify-center h-10 w-full md:flex hidden"> {/* Visible only on desktop */}
                        <span className="text-white text-lg">⚙️</span>
                    </div>
                </div>


                {/* Second Section with Images */}
                <div className="hidden md:block bg-[#25084E] flex-grow p-2 rounded-md flex flex-col gap-2 h-[80vh]">
                    <img src="/CasinoSlots.jpg" alt="Casino Slots" className="w-full h-1/3 rounded-md" />
                    <img src="/Winner.jpg" alt="Winner" className="w-full h-1/3 rounded-md" />
                    <img src="/winner2.jpg" alt="Winner 2" className="w-full h-1/3 rounded-md" />
                </div>
            </div>

        </div>
    )
}

export default GameScreen