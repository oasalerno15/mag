"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import type { ReactElement } from "react";

interface NavItemProps {
  label: string;
  icon: ReactElement;
  delay: number;
  index: number;
}

const NavItem = ({ label, icon, delay, index }: NavItemProps) => {
  const [hoverCount, setHoverCount] = useState(0);

  return (
    <motion.div
      className="flex items-center gap-4 cursor-pointer"
      onMouseEnter={() => setHoverCount((prev) => prev + 1)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + index * 0.15, duration: 0.4 }}
    >
      {/* Icon */}
      <div className="w-8 h-8 relative">
        <motion.div
          key={hoverCount}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {icon}
        </motion.div>
      </div>

      {/* Text with handwriting effect */}
      <svg width="120" height="40" viewBox="0 0 120 40" className="overflow-visible">
        <motion.text
          x="0"
          y="25"
          className="text-2xl fill-none stroke-white"
          style={{
            fontFamily: "'Great Vibes', cursive",
            strokeWidth: 0.8,
            paintOrder: "stroke",
          }}
          initial={{
            strokeDasharray: 200,
            strokeDashoffset: 200,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{
            duration: 1,
            delay: delay + index * 0.15,
            ease: "easeInOut",
          }}
        >
          {label}
        </motion.text>
        <motion.text
          x="0"
          y="25"
          className="text-2xl fill-white"
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
            duration: 0.3,
            delay: delay + index * 0.15 + 0.9,
            ease: "easeIn",
          }}
        >
          {label}
        </motion.text>
      </svg>
    </motion.div>
  );
};

interface NavigationMenuProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onSidebarActivate?: (section: string) => void;
  activeSection?: string;
}

export default function NavigationMenu({
  onMouseEnter,
  onMouseLeave,
  onSidebarActivate,
  activeSection,
}: NavigationMenuProps) {
  const logoSize = 240;
  const [isSidebarMode, setIsSidebarMode] = useState(false);

  const handleNavClick = (section: string) => {
    setIsSidebarMode(true);
    if (onSidebarActivate) {
      onSidebarActivate(section);
    }
  };

  const navItems = [
    {
      label: "youth",
      icon: (
        <motion.svg viewBox="0 0 32 32" className="w-8 h-8">
          <motion.circle
            cx="16"
            cy="16"
            r="12"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.circle
            cx="16"
            cy="13"
            r="3"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          />
          <motion.path
            d="M 11 20 Q 16 23 21 20"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
          />
        </motion.svg>
      ),
    },
    {
      label: "becoming a man",
      icon: (
        <motion.svg viewBox="0 0 32 32" className="w-8 h-8">
          <motion.rect
            x="10"
            y="8"
            width="12"
            height="16"
            rx="1"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M 13 12 L 19 12 M 13 16 L 19 16 M 13 20 L 19 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          />
        </motion.svg>
      ),
    },
    {
      label: "apocalypse",
      icon: (
        <motion.svg viewBox="0 0 32 32" className="w-8 h-8">
          <motion.path
            d="M 16 8 L 18 14 L 24 14 L 19 18 L 21 24 L 16 20 L 11 24 L 13 18 L 8 14 L 14 14 Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.svg>
      ),
    },
    {
      label: "collapse",
      icon: (
        <motion.svg viewBox="0 0 32 32" className="w-8 h-8">
          <motion.rect
            x="8"
            y="8"
            width="16"
            height="16"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M 12 14 L 16 18 L 20 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
          />
        </motion.svg>
      ),
    },
  ];

  if (isSidebarMode) {
    return (
      <motion.div
        className="fixed left-0 top-0 h-screen w-[200px] bg-black border-r-2 border-white z-50 flex flex-col py-8 px-6"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Logo at the top */}
        <div className="flex justify-center mb-12">
          <div style={{ width: "160px", height: "160px" }}>
            <Image
              src="/kk.png"
              alt="Logo"
              width={160}
              height={160}
              className="object-contain w-full h-full"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Navigation items vertically */}
        <nav className="flex flex-col gap-8">
          {navItems.map((item, index) => (
            <div key={item.label} onClick={() => handleNavClick(item.label)} className="flex items-center gap-3">
              {/* Active indicator dot */}
              <div className="w-2 h-2 rounded-full bg-white transition-opacity duration-300" style={{ opacity: activeSection === item.label ? 1 : 0 }}></div>
              <NavItem
                label={item.label}
                icon={item.icon}
                delay={0}
                index={index}
              />
            </div>
          ))}
        </nav>
      </motion.div>
    );
  }

  return (
    <div
      className="relative z-10"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="border-2 border-white rounded-lg bg-black px-12 py-8">
        {/* Logo inside the box at the top */}
        <div className="flex justify-center mb-8" style={{ marginLeft: "30px" }}>
          <div style={{ width: `${logoSize}px`, height: `${logoSize}px` }}>
            <Image
              src="/kk.png"
              alt="Logo"
              width={logoSize}
              height={logoSize}
              className="object-contain w-full h-full"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Navigation items */}
        <div className="flex flex-col gap-6 items-center" style={{ marginLeft: "40px" }}>
          {navItems.map((item, index) => (
            <div key={item.label} onClick={() => handleNavClick(item.label)}>
              <NavItem
                label={item.label}
                icon={item.icon}
                delay={5.5}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

