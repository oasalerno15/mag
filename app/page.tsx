"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavigationMenu from "@/components/NavigationMenu";
import ContentDisplay from "@/components/ContentDisplay";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [showWhiteBackground, setShowWhiteBackground] = useState(false);
  const [activeSection, setActiveSection] = useState("youth");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMenuMouseEnter = () => {
    // No animation to pause anymore
  };

  const handleMenuMouseLeave = () => {
    // No animation to resume anymore
  };

  const handleSidebarActivate = (section: string) => {
    setShowWhiteBackground(true);
    setActiveSection(section);
  };

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* White background and content when sidebar is active */}
      {showWhiteBackground && (
        <>
          <motion.div
            className="fixed inset-0 bg-white z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="fixed inset-0 left-[200px] z-40 overflow-y-auto">
            <ContentDisplay activeSection={activeSection} />
          </div>
        </>
      )}

      <motion.div
        className="relative bg-black"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
      >
        {/* Title Section */}
        <motion.div
          className="flex min-h-screen flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 2,
            delay: 4.5,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <svg
              width="800"
              height="200"
              viewBox="0 0 800 200"
              className="w-full max-w-4xl px-4"
            >
              <defs>
                <style>
                  {`
                    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
                  `}
                </style>
              </defs>
              
              {/* The Browning Magazine text with stroke animation */}
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[64px] fill-none stroke-white"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  strokeWidth: 1,
                  paintOrder: "stroke",
                }}
                initial={{
                  strokeDasharray: 2000,
                  strokeDashoffset: 2000,
                }}
                animate={{
                  strokeDashoffset: 0,
                }}
                transition={{
                  duration: 3.5,
                  ease: "easeInOut",
                }}
              >
                The Browning Magazine
              </motion.text>

              {/* Fill animation that follows the stroke */}
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[64px] fill-white"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 3.2,
                  ease: "easeIn",
                }}
              >
                The Browning Magazine
              </motion.text>
            </svg>
        </div>
          
          {/* Subtext */}
          <motion.p
            className="mt-4 text-xl tracking-wide text-white/60"
            style={{
              fontFamily: "'Great Vibes', cursive",
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 3.7,
              ease: "easeIn",
            }}
          >
            inspired by the harvard lampoon
          </motion.p>
        </motion.div>

        {/* Navigation Menu Section */}
        <motion.div
          className="absolute top-0 left-0 flex min-h-screen w-full items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 5,
            ease: "easeInOut",
          }}
          >
          {/* Left side - Elaborate artistic patterns */}
          {!showWhiteBackground && (
            <motion.div
              className="absolute left-0 top-0 w-1/4 h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5, duration: 0.5 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 400 1000" preserveAspectRatio="xMinYMid meet" className="overflow-visible">
                {/* Large spiral top */}
                <motion.path
                  d="M 300 100 Q 280 120, 260 120 Q 240 120, 230 100 Q 220 80, 230 60 Q 250 40, 280 50 Q 310 60, 320 90 Q 325 120, 310 140"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 2, delay: 5.5, ease: "easeInOut" }}
                />
                
                {/* Star burst pattern */}
                <motion.path
                  d="M 350 180 L 320 190 L 330 210 L 310 220 L 320 240 L 300 245 L 315 265 L 300 280 M 350 180 L 365 200 L 380 195 L 385 215 L 400 220"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 5.8, ease: "easeInOut" }}
                />
                
                {/* Flowing organic curves */}
                <motion.path
                  d="M 50 200 Q 100 220, 120 250 Q 140 280, 100 300 Q 60 320, 80 350 Q 100 380, 140 370"
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 2.5, delay: 6, ease: "easeInOut" }}
                />
                
                {/* Abstract geometric shapes */}
                <motion.path
                  d="M 200 320 L 230 340 L 220 370 L 190 365 Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1.2, delay: 6.3, ease: "easeInOut" }}
                />
                
                {/* Circular mandala pattern */}
                <motion.path
                  d="M 320 420 Q 340 440, 320 460 Q 300 480, 280 460 Q 260 440, 280 420 Q 300 400, 320 420 Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.8, delay: 6.5, ease: "easeInOut" }}
                />
                
                {/* Inner mandala details */}
                <motion.path
                  d="M 300 430 L 300 450 M 290 440 L 310 440 M 285 435 L 315 445 M 285 445 L 315 435"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1, delay: 6.8, ease: "easeInOut" }}
                />
                
                {/* Vertical flowing lines */}
                <motion.path
                  d="M 150 500 Q 160 530, 150 560 Q 140 590, 155 620 Q 170 650, 160 680"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 2.2, delay: 6.2, ease: "easeInOut" }}
                />
                
                {/* Scattered dots and small circles */}
                <motion.path
                  d="M 250 550 Q 255 555, 250 560 Q 245 565, 240 560 Q 235 555, 240 550 Q 245 545, 250 550 Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 0.8, delay: 7, ease: "easeInOut" }}
                />
                
                {/* Wave patterns */}
                <motion.path
                  d="M 80 700 Q 100 690, 120 700 Q 140 710, 160 700 Q 180 690, 200 700"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 6.6, ease: "easeInOut" }}
                />
                
                {/* Double wave */}
                <motion.path
                  d="M 80 720 Q 100 710, 120 720 Q 140 730, 160 720 Q 180 710, 200 720"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1.5, delay: 6.7, ease: "easeInOut" }}
                />
                
                {/* Bottom ornamental flourish */}
                <motion.path
                  d="M 280 800 Q 300 820, 320 810 Q 340 800, 350 820 Q 355 840, 340 855 Q 325 870, 310 860"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 1.8, delay: 6.9, ease: "easeInOut" }}
                />
                
                {/* Radiating lines from center */}
                <motion.path
                  d="M 100 480 L 120 470 M 100 480 L 110 500 M 100 480 L 80 485 M 100 480 L 95 460"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1, delay: 7.1, ease: "easeInOut" }}
                />
                
                {/* Abstract vine-like pattern */}
                <motion.path
                  d="M 350 600 Q 330 620, 340 640 Q 350 660, 330 680 Q 310 700, 330 720"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: 6.4, ease: "easeInOut" }}
                />
                
                {/* Leaf accents on vine */}
                <motion.path
                  d="M 340 620 Q 355 625, 350 635 M 330 660 Q 320 665, 325 675 M 340 700 Q 355 705, 350 715"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1.2, delay: 7.2, ease: "easeInOut" }}
                />
                
                {/* Small decorative swirls scattered */}
                <motion.path
                  d="M 200 150 Q 210 155, 205 165 M 120 380 Q 110 385, 115 395 M 260 680 Q 270 685, 265 695"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, delay: 7.3, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          )}
          
          {/* Right side - Elaborate artistic patterns */}
          {!showWhiteBackground && (
            <motion.div
              className="absolute right-0 top-0 w-1/4 h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5, duration: 0.5 }}
            >
              <svg width="100%" height="100%" viewBox="0 0 400 1000" preserveAspectRatio="xMaxYMid meet" className="overflow-visible">
                {/* Large organic spiral */}
                <motion.path
                  d="M 100 120 Q 120 100, 140 110 Q 160 120, 165 145 Q 170 170, 150 185 Q 130 200, 110 185 Q 90 170, 95 145"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 2, delay: 5.6, ease: "easeInOut" }}
                />
                
                {/* Constellation-like pattern */}
                <motion.path
                  d="M 50 200 L 70 220 L 90 210 L 75 240 L 55 250 L 40 230 Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1.3, delay: 5.9, ease: "easeInOut" }}
                />
                
                {/* Connected dots */}
                <motion.path
                  d="M 45 205 L 52 202 M 75 225 L 82 222 M 60 248 L 67 245"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 0.8, delay: 6.2, ease: "easeInOut" }}
                />
                
                {/* Flowing abstract ribbons */}
                <motion.path
                  d="M 300 280 Q 270 300, 290 330 Q 310 360, 280 380 Q 250 400, 275 430"
                  stroke="white"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.75 }}
                  transition={{ duration: 2.3, delay: 6.1, ease: "easeInOut" }}
                />
                
                {/* Parallel ribbon accent */}
                <motion.path
                  d="M 310 290 Q 280 310, 300 340 Q 320 370, 290 390"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 6.3, ease: "easeInOut" }}
                />
                
                {/* Hexagonal pattern */}
                <motion.path
                  d="M 150 450 L 170 440 L 190 450 L 190 470 L 170 480 L 150 470 Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 6.5, ease: "easeInOut" }}
                />
                
                {/* Inner hexagon details */}
                <motion.path
                  d="M 160 450 L 170 460 L 180 450 M 170 460 L 170 475"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1, delay: 6.8, ease: "easeInOut" }}
                />
                
                {/* Curved vertical flow */}
                <motion.path
                  d="M 240 520 Q 250 550, 240 580 Q 230 610, 245 640 Q 260 670, 250 700"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 2.2, delay: 6.3, ease: "easeInOut" }}
                />
                
                {/* Art deco fan pattern */}
                <motion.path
                  d="M 100 600 Q 120 590, 140 600 M 100 610 Q 120 600, 140 610 M 100 620 Q 120 610, 140 620"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 6.7, ease: "easeInOut" }}
                />
                
                {/* Spiral galaxy-like pattern */}
                <motion.path
                  d="M 320 720 Q 330 710, 340 720 Q 350 730, 345 745 Q 340 760, 325 760 Q 310 760, 305 745 Q 300 730, 310 720"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.65 }}
                  transition={{ duration: 1.8, delay: 6.6, ease: "easeInOut" }}
                />
                
                {/* Zigzag energy pattern */}
                <motion.path
                  d="M 60 750 L 80 770 L 70 790 L 90 810 L 75 830"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.4, delay: 6.9, ease: "easeInOut" }}
                />
                
                {/* Bottom ornamental cluster */}
                <motion.path
                  d="M 180 850 Q 200 870, 220 860 Q 240 850, 250 870 Q 255 890, 235 900"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={{ duration: 1.8, delay: 7, ease: "easeInOut" }}
                />
                
                {/* Small accent circles */}
                <motion.path
                  d="M 350 350 Q 355 345, 360 350 Q 365 355, 360 360 Q 355 365, 350 360 Q 345 355, 350 350 Z"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 0.8, delay: 7.1, ease: "easeInOut" }}
                />
                
                {/* Scattered decorative marks */}
                <motion.path
                  d="M 200 180 Q 210 185, 205 195 M 280 500 Q 270 505, 275 515 M 140 780 Q 150 785, 145 795"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.4 }}
                  transition={{ duration: 1.5, delay: 7.3, ease: "easeInOut" }}
                />
                
                {/* Radiating burst */}
                <motion.path
                  d="M 300 150 L 310 140 M 300 150 L 315 155 M 300 150 L 310 165 M 300 150 L 290 160"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 1, delay: 7.2, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          )}
          
          {/* Navigation Menu Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <NavigationMenu
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
                onSidebarActivate={handleSidebarActivate}
                activeSection={activeSection}
              />
        </div>
    </div>
        </motion.div>
      </motion.div>
    </>
  );
}
