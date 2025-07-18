import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface MenuIconProps {
  className?: string;
}

export default function MenuIcon({ className }: MenuIconProps) {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between p-10">
        <HiOutlineMenuAlt4 className={` text-2xl ${className}`} />
      </div>
  );
}
