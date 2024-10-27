import NotificationsMenu from "@/app/(dashboard)/_components/NotificationsMenu";

import Profile from "@/app/(dashboard)/_components/Profile";

import IconMenu from "@/components/icons/IconMenu";

const Header = () => {
  return (
    <header className="h-header-height flex items-center justify-between px-content border-b">
      <label htmlFor="sidebar-toggle" role="button">
        <IconMenu />
      </label>

      <div className="flex items-center gap-2rem">
        <NotificationsMenu />
        <Profile className="hidden sm:block" />
      </div>
    </header>
  );
};

export default Header;
