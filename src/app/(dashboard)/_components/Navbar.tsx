"use client";

import ComingIcon from "@/components/icons/comingIcon";

import DocumentsIcon from "@/components/icons/documentsIcon";

import SettingsIcon from "@/components/icons/settingsIcon";

import StatsIcon from "@/components/icons/statsIcon";

import ToolsIcon from "@/components/icons/toolsIcon";

import UsersIcon from "@/components/icons/usersIcon";

import AppHelper from "@/helpers/AppHelper";

import Link from "next/link";

import {usePathname} from "next/navigation";

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-0.75rem h-full">
      <NavbarItem href="/overview">
        <StatsIcon />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Overview</span>
      </NavbarItem>

      <NavbarItem href="/exams">
        <UsersIcon />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Exams</span>
      </NavbarItem>

      <NavbarItem href="/overview">
        <DocumentsIcon />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Wizard</span>
      </NavbarItem>

      <NavbarItem href="/overview">
        <ComingIcon />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Coming soon</span>
      </NavbarItem>

      <NavbarItem href="/overview">
        <ToolsIcon />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Tools</span>
      </NavbarItem>

      <NavbarItem href="/overview">
        <SettingsIcon />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Settings</span>
      </NavbarItem>
    </nav>
  );
};

interface IProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const NavbarItem = ({children, href, className}: IProps) => {
  const pathname = usePathname();

  const isActiveClass = () => pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={AppHelper.classes(
        "whitespace-nowrap flex items-center gap-0.75rem text-18 text-gray-500 px-1.25rem py-0.75rem transition border-s-4 border-s-transparent hover:border-s-primary hover:bg-primary/5 hover:!text-base-content",
        className,
        {
          "!border-s-primary bg-primary/5 !text-base-content": isActiveClass(),
        }
      )}
    >
      {children}
    </Link>
  );
};
