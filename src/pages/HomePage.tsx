import Banner from "../components/ui/homePage/Banner";
import Benefits from "../components/ui/homePage/Benefits";
import Categories from "../components/ui/homePage/Categories";
import Featured from "../components/ui/homePage/Featured";
import Gallery from "../components/ui/homePage/Gallery";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <Banner></Banner>
      <Categories></Categories>
      <Featured></Featured>
      <Benefits></Benefits>
      <Gallery></Gallery>
    </div>
  );
};

export default HomePage;
