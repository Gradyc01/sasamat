import { Outlet } from "react-router-dom";
import Header from "../components/StickyHeader";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;