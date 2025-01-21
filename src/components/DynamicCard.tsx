import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

// Define types for props
interface DynamicCardProps {
  title: string;
  IconComponent: React.ComponentType<{ className?: string }>; // Specify className prop // Accepts any React component
  infoText: string; // This will accept any dynamic string
  buttonLabel: string;
  imageSrc: string;
  backgroundColor?: string; // Optional, defaults to "#25084E"
  borderColor?: string; // Optional, defaults to "#EAAAFF80"
  borderSize?: string; // Optional, defaults to "1px"
  cardWidth?: string; // Optional, defaults to "auto"
  cardHeight?: string; // Optional, defaults to "auto"
  imagePosition?: "right" | "bottom"; // New prop to control image position
  overlayColor?: string; // Optional, defaults to a semi-transparent black
  showButton?: boolean; // Optional prop to control button visibility
  popUpImage?: string
  wheelText?: string; // Text like "WHEEL"
  descriptionText?: string; // Dynamic description under the title
  timerValue?: string; // Dynamic timer content
}

// Dynamic Card Component
const DynamicCard: React.FC<DynamicCardProps> = ({
  title,
  IconComponent,
  infoText,
  buttonLabel,
  imageSrc,
  backgroundColor = "#25084E",
  borderColor = "#EAAAFF80",
  borderSize = "1px",
  cardWidth = "auto",
  cardHeight = "auto",
  overlayColor = "rgba(0, 0, 0, 0.5)",
  showButton = true,
  popUpImage,
  wheelText,
  descriptionText,
  timerValue,
}) => {
  const [showImageContent, setShowImageContent] = useState(false); // State to toggle image content visibility

  const handleButtonClick = () => {
    setShowImageContent(!showImageContent); // Toggle visibility on button click
  };
  return (

    <div
      className={`relative flex flex-col justify-between p-4 rounded-md ${cardWidth} ${cardHeight}`}
      style={{
        backgroundColor,
        border: `${borderSize} solid ${borderColor}`,
        width: cardWidth,
        //height: cardHeight,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "right center" }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      ></div>

      {/* Content on top of the image */}
      <div className="relative z-10 text-white flex md:flex-col justify-between h-full gap-2">
        <div>
          {/* Title */}
          <div className="text-xl font-semibold">{title}</div>

          {/* Icon and Info Text */}
          <div className="flex items-center gap-2">
            <IconComponent className="text-2xl text-white" />
            <span>{infoText}</span>
          </div>
        </div>


        {/* Button (conditionally rendered) */}
        {showButton && (
          <div className="mt-auto">
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 bg-gradient-to-b from-[#9134FF] to-[#BA38F3] rounded whitespace-nowrap"
              style={{
                alignSelf: "flex-start", // Align button to the left
              }}
            >
              {buttonLabel}
            </button>
          </div>
        )}
      </div>

      {/* Dynamic Image Content */}
      <div className="absolute inset-x-0 bottom-0 text-center p-4">
        {/* Wheel Text */}
        {wheelText && (
          <div className="text-2xl font-bold">{wheelText}</div>
        )}
        {/* Description */}
        {descriptionText && (
          <div className="text-sm">{descriptionText}</div>
        )}
        {/* Timer */}
        {timerValue && (
          <div className="text-md font-semibold mt-2">{timerValue}</div>
        )}
      </div>

      {/* Image Content Display */}
      {showImageContent && (
        <div className=" md:hidden mt-4 bg-white text-black rounded-md shadow-md w-full h-[60vh] fixed left-0 right-0 bottom-0 z-150">
          {/* Close Icon */}
          <button
            className="absolute top-2 right-2 text-2xl text-black bg-white rounded-full p-1 shadow-md hover:bg-gray-200"
            onClick={() => setShowImageContent(false)} // Close function
          >
            <FaTimes />
          </button>

          {/* Image Content */}
          <img src={popUpImage} alt={`${title} Content`} className="w-screen h-full object-fit bg-[#160433]" />
          {/* Content Overlay */}
          <div className="absolute top-6 flex flex-col items-center justify-center text-white ">
            {/* WHEEL Title */}
            <h2
              className="text-2xl font-bold px-4"
              style={{
                background: "linear-gradient(180deg, #FFBDF0 0%, #BA38F3 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                border: "1px solid",
                borderImageSource: "linear-gradient(360deg, #FFBDF0 0%, #F8C6ED 100%)",
              }}
            >
              WHEEL
            </h2>

            {/* Description */}
            <p
              className="text-sm text-center px-4"
              style={{

                color: "#ECDFF180", // Assuming this is the text color for readability

              }}
            >
              Spin the free wheel once an hour to get bonus
            </p>

            {/* Timer */}
            <p
              className="text-lg font-semibold px-4"
              style={{

                color: "#FFFFFF", // Timer text color

              }}
            >
              Timer: 00:59:59
            </p>
          </div>
        </div>
      )}
    </div>
  );
};


export default DynamicCard;
