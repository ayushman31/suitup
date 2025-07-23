"use client";

import MenuContainer from "./MenuContainer";

interface ClientMenuWrapperProps {
  iconClassName?: string;
}

export default function ClientMenuWrapper({ iconClassName }: ClientMenuWrapperProps) {
  return <MenuContainer iconClassName={iconClassName} />;
} 