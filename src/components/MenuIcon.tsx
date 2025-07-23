import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface MenuIconProps {
  className?: string;
  onClick?: () => void;
}

export default function MenuIcon({ className, onClick }: MenuIconProps) {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between p-10 pointer-events-none">
        <HiOutlineMenuAlt4 
          className={`text-2xl cursor-pointer hover:opacity-75 transition-opacity pointer-events-auto ${className}`} 
          onClick={onClick}
        />
      </div>
  );
}
