"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current vertical scroll position
      const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
      const clientHeight = document.documentElement.clientHeight; // Height of the viewport

      // Show the button when the user scrolls near the bottom
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setIsVisible(true);
      } else if (scrollTop <= 100) {
        // Hide the button when the user scrolls near the top
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <a
        href="#landing"
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        aria-label="Back to top"
      >
        <FaArrowUp size={20} />
      </a>
    )
  );
}
