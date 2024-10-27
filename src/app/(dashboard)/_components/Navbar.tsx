"use client";

import IconComing from "@/components/icons/IconComing";

import IconDocument from "@/components/icons/IconDocument";

import IconSettings from "@/components/icons/IconSettings";

import IconStats from "@/components/icons/IconStats";

import IconTools from "@/components/icons/IconTools";

import IconUsers from "@/components/icons/IconUsers";

import AppHelper from "@/helpers/AppHelper";

import Link from "next/link";

import {usePathname} from "next/navigation";

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-0.75rem h-full">
      <NavbarItem href="/overview">
        <IconStats />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Overview</span>
      </NavbarItem>

      <NavbarItem href="/exams">
        <IconUsers />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Exams</span>
      </NavbarItem>

      <NavbarItem href="/overview">
        <IconDocument />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Wizard</span>
      </NavbarItem>

      <NavbarItem href="/overview">
        <IconComing />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Coming soon</span>
      </NavbarItem>

      <NavbarItem href="/overview">
        <IconTools />
        <span className="lg:peer-nested:opacity-0 transition-opacity">Tools</span>
      </NavbarItem>

      <NavbarItem href="/overview">
        <IconSettings />
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
