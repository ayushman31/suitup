"use client";

import { useState } from 'react';
import MenuIcon from "./MenuIcon";
import { Menu } from "./Menu";
import { motion, AnimatePresence } from "motion/react";

interface MenuContainerProps {
  iconClassName?: string;
}

export default function MenuContainer({ iconClassName }: MenuContainerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuIcon className={iconClassName} onClick={toggleMenu} />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-100 rounded-lg p-6 max-w-6xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Menu />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 