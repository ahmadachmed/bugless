import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-8 h-8 text-sm",
  md: "w-12 h-12 text-base",
  lg: "w-16 h-16 text-lg",
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, name, size = "md" }) => {
  const getInitials = (name?: string) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "?";
  };

  return (
    <div className={`relative inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${sizeClasses[size]}`}>
      {src ? (
        <Image
          src={src}
          alt={alt || "Avatar"}
          width={100}
          height={100}
          className="object-cover w-full h-full"
          priority
        />
      ) : (
        <span className="text-gray-600 font-semibold">{getInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;