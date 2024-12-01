import { Outlet } from "react-router-dom";
import Header from "../ui/homePage/Header";
import Footer from "../ui/homePage/Footer";

const MainLayout = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
