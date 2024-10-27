import {Navbar} from "@/app/(dashboard)/_components/Navbar";

import Logo from "@/components/Logo";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-0 lg:w-sidebar-width peer-checked/sidebar-toggle:w-sidebar-width lg:peer-checked/sidebar-toggle:w-sidebar-width-sm fixed top-0 start-0 bottom-0 h-screen overflow-y-auto overflow-x-hidden pb-content-margin transition-all">
      <div className="px-1rem w-sidebar-width h-header-height border-b mt-content-margin">
        <div className="lg:peer-nested:hidden">
          <Logo className="w-[130px]" />
        </div>
      </div>

      {/* start navigation  */}
      <div className="pt-2rem flex-1 overflow-y-auto overflow-x-hidden w-sidebar-width">
        <Navbar />
      </div>
    </aside>
  );
};

export default Sidebar;
