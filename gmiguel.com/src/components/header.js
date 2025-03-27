"use client"; // Add this directive at the top

import { ModeToggle } from "./darkmode";
import Dice from "./dice"; // Import the Dice component
import Navigation from "./navbuttons.js"; // Import the Navigation component

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-secondary text-red-500 dark:text-blue-500">
      {/* Dice on the left */}
      <div className="flex-shrink-0">
        <Dice />
      </div>

      {/* Navigation in the center */}
      <Navigation />

      {/* Mode toggle on the right */}
      <div className="flex-shrink-0">
        <ModeToggle />
      </div>
    </header>
  );
}
