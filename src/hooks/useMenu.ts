import { useState, useRef } from 'react';
import useClickOutside from './useClickOutside';

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  // Close menu when clicking outside
  useClickOutside(menuRef, closeMenu);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    openMenu,
    menuRef
  };
} 