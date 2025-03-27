"use client"; // Add this directive at the top

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Dice() {
  const { resolvedTheme } = useTheme(); // Use resolvedTheme to get the current theme
  const [isRolling, setIsRolling] = useState(false);
  const [rolledNumber, setRolledNumber] = useState(null); // Initialize as null
  const [showNumber, setShowNumber] = useState(false); // Control visibility of the rolled number

  const rollDice = () => {
    setIsRolling(true);
    const randomNumber = Math.floor(Math.random() * 20) + 1; // Generate a random number between 1 and 20
    setTimeout(() => {
      setRolledNumber(randomNumber); // Update the number on the dice
      setIsRolling(false); // Stop the animation
      setShowNumber(true); // Ensure the number is visible after rolling
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowNumber(false); // Hide the number when the user scrolls
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center space-x-2">
      {/* Dice graphic */}
      <div
        className={`w-12 h-12 flex items-center justify-center cursor-pointer ${
          isRolling ? "animate-roll" : ""
        }`}
        onClick={rollDice}
      >
        <img
          src={resolvedTheme === "dark" ? "/darkdice.svg" : "/dice.svg"}
          alt="20-sided dice"
          className={`w-full h-full ${
            resolvedTheme === "dark" ? "invert" : ""
          }`} // Apply invert filter for dark mode
        />
      </div>

      {/* Display the rolled number */}
      {showNumber && rolledNumber !== null && (
        <div className="text-md font-bold text-gray-700 dark:text-gray-300">
          {rolledNumber}
        </div>
      )}

      {/* Add CSS for dice animation */}
      <style jsx>{`
        .animate-roll {
          animation: roll 1s ease-in-out;
        }

        @keyframes roll {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(90deg);
          }
          50% {
            transform: rotate(180deg);
          }
          75% {
            transform: rotate(270deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
