import Awards from "../components/ui/homePage/Awards";
import Banner from "../components/ui/homePage/Banner";
import Benefits from "../components/ui/homePage/Benefits";
import Categories from "../components/ui/homePage/Categories";
import Featured from "../components/ui/homePage/Featured";
import Gallery from "../components/ui/homePage/Gallery";
import ProductDesc from "../components/ui/homePage/ProductDesc";

const HomePage = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Categories></Categories>
      <Featured></Featured>
      <ProductDesc></ProductDesc>
      <Benefits></Benefits>
      <Gallery></Gallery>
      <Awards></Awards>
    </div>
  );
};

export default HomePage;
