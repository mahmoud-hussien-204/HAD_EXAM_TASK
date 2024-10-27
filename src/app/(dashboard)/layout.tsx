import Content from "@/app/(dashboard)/_components/Content";

import Footer from "@/app/(dashboard)/_components/Footer";

import Header from "@/app/(dashboard)/_components/Header";

import Sidebar from "@/app/(dashboard)/_components/Sidebar";

const DashboardLayout = ({children}: React.PropsWithChildren) => {
  return (
    <>
      {/*this input for toggle sidebar*/}
      <input
        hidden
        type="checkbox"
        id="sidebar-toggle"
        className="peer/sidebar-toggle peer-nested"
      />

      <Sidebar />

      <Content>
        <Header />
        <div className="p-content">{children}</div>
        <Footer />
      </Content>
    </>
  );
};

export default DashboardLayout;
