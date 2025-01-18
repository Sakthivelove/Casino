import React from "react";

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
}) => {
  return (
    <div
      className={`relative flex flex-col justify-between p-4 rounded-md ${cardWidth} ${cardHeight}`}
      style={{
        backgroundColor,
        border: `${borderSize} solid ${borderColor}`,
        width: cardWidth,
        height: cardHeight,
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
      <div className="relative z-10 text-white flex flex-col h-full gap-2">
        {/* Title */}
        <div className="text-xl font-semibold">{title}</div>

        {/* Icon and Info Text */}
        <div className="flex items-center gap-2">
          <IconComponent className="text-2xl text-white" />
          <span>{infoText}</span>
        </div>

        {/* Button (conditionally rendered) */}
        {showButton && (
          <div className="mt-auto">
            <button
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
    </div>
  );
};


export default DynamicCard;
