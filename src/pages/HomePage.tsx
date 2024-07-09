import Banner from "../components/ui/homePage/Banner";
import Benefits from "../components/ui/homePage/Benefits";
import Categories from "../components/ui/homePage/Categories";
import Featured from "../components/ui/homePage/Featured";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <Featured></Featured>
      <Benefits></Benefits>
    </div>
  );
};

export default HomePage;
