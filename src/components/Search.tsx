'use client';
import React, { RefObject, useRef, useState, useEffect } from 'react';
import { motion, MotionConfig, Transition } from 'motion/react';
import useClickOutside from '@/hooks/useClickOutside';
import { ArrowRight, SearchIcon, User, ShoppingCart } from 'lucide-react';

const transition = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.2,
};

interface SearchProps {
  className?: string;
}

function Button({
  children,
  onClick,
  disabled,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  return (
    <button
      className='relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default function Search({ className }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useClickOutside(containerRef as RefObject<HTMLElement>, () => {
    setIsOpen(false);
  });

  const getWidth = () => {
    if (!isOpen) return '150px';
    return isMobile ? '150px' : '300px';
  };

  return (
    <MotionConfig transition={transition as Transition}>
      <div className={`relative ${className}`} ref={containerRef}>
        <div className='h-full w-full rounded-xl border border-zinc-950/10 bg-white'>
          <motion.div
            animate={{
              width: getWidth(),
            }}
            initial={false}
          >
            <div className='overflow-hidden p-2'>
              {!isOpen ? (
                <div className='flex space-x-3'>
                  <Button ariaLabel='Shopping cart'>
                    <ShoppingCart className='h-5 w-5' />
                  </Button>
                  <Button ariaLabel='User profile'>
                    <User className='h-5 w-5' />
                  </Button>
                  <Button
                    onClick={() => setIsOpen(true)}
                    ariaLabel='Search notes'
                  >
                    <SearchIcon className='h-5 w-5' />
                  </Button>
                </div>
              ) : (
                <div className='flex space-x-2'>
                  {/* Back button - only show on desktop */}
                  {!isMobile && (
                    <Button onClick={() => setIsOpen(false)} ariaLabel='Back'>
                      <ArrowRight className='h-5 w-5' />
                    </Button>
                  )}
                  
                  <div className='relative w-full'>
                    <input
                      className='h-9 w-full rounded-lg border border-zinc-950/10 bg-transparent p-2 text-zinc-900 placeholder-zinc-500 focus:outline-hidden text-sm'
                      autoFocus
                      placeholder={isMobile ? 'Search...' : 'Search anything'}
                      onBlur={() => isMobile && setIsOpen(false)} // Auto-close on mobile when focus lost
                    />
                    {/* Helper text - only show on desktop */}
                    {!isMobile && (
                      <div className='absolute right-1 top-0 flex h-full items-center justify-center text-xs text-zinc-400'>
                        ex: suits
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
