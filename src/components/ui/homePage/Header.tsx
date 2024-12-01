import { useEffect, useState } from "react";
import { Dropdown, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { removeFromCart } from "../../../redux/features/cart/cartSlice";

const Header = () => {
  const location = useLocation();
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const products = useAppSelector((state: RootState) => state.cart.items);

  const totalPrice = () => {
    return products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // handle remove from cart
  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = isNavbarFixed
    ? {
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 100,
        transition: "all 0.3s ease",
      }
    : {
        width: "100%",
        backgroundColor: "transparent",
      };

  return (
    <>
      <Navbar className=" text-white" style={navbarStyle}>
        <Navbar.Brand to="/">
          <span className="self-center whitespace-nowrap text-xl lg:text-2xl font-bold text-primary">
            FitnessHub
          </span>
        </Navbar.Brand>

        <div className="flex gap-2 md:order-2">
          <button
            onClick={toggleDrawer}
            className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
          >
            <Icon
              icon={"bx:cart-add"}
              className="text-lg md:xl lg:text-2xl font-bold text-white"
            />

            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 ">
              {products?.length}
            </div>
          </button>

          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="text-white hover:text-primary">
          <Navbar.Link
            active={location.pathname == "/"}
            className="text-white hover:text-primary"
          >
            <Link to={"/"}> Home </Link>{" "}
          </Navbar.Link>
          <Navbar.Link
            active={location.pathname == "/Products"}
            className="text-white hover:text-primary"
          >
            <Link to={"/Products"}> Products </Link>
          </Navbar.Link>

          <Navbar.Link className="text-white hover:text-primary">
            <Dropdown inline label="Categories">
              <Dropdown.Item>
                <Link to={"/categories/Processor"}> Processor </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <Link to={"/categories/Motherboard"}> Motherboard </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <Link to={"/categories/RAM"}> RAM </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/categories/PowerSupply"}> Power Supply Unit </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <Link to={"/categories/StorageDevice"}>
                  {" "}
                  Storage Device{" "}
                </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                {" "}
                <Link to={"/categories/Monitor"}> Monitor </Link>{" "}
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={"/categories/accesorries"}> Others </Link>{" "}
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>

          <Navbar.Link
            active={location.pathname == "/Offers"}
            className="text-white hover:text-primary"
          >
            <Link to={"/Offers"}> Offers</Link>
          </Navbar.Link>

          <Navbar.Link
            active={location.pathname == "/about-us"}
            className="text-white hover:text-primary"
          >
            <Link to={"/about-us"}> About Us</Link>
          </Navbar.Link>

          <Navbar.Link
            className="text-white hover:text-primary"
            active={location.pathname == "/contacts"}
          >
            <Link to={"/contacts"}> Contacts </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="">
        <div
          id="drawer-right-example"
          className={`fixed bottom-0 top-20 right-0 z-40 transition-transform ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          } bg-white w-80`}
          style={{
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
          }}
          tabIndex="-1"
          aria-labelledby="drawer-right-label"
        >
          <div className="bg-primary flex items-center justify-between text-white h-10 px-4 py-2">
            <h1 className="text-lg font-bold">Your Cart</h1>
            <button onClick={toggleDrawer} className="text-2xl font-bold">
              <Icon icon="material-symbols:close" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto w-full">
            <div className="w-full">
              {products.length !== 0 ? (
                <div className="px-4 my-3">
                  {products?.map((pro) => (
                    <div
                      key={pro?._id}
                      className="text-secondary mb-4 flex items-start justify-between w-full"
                    >
                      <div className="w-full">
                        <h1 className="text-sm font-bold">{pro?.name}</h1>
                        <p className="text-end">
                          {parseFloat(pro?.price)} &#215; {pro?.quantity} ={" "}
                          {parseFloat(pro?.price) * pro?.quantity} Tk
                        </p>
                        <hr />
                      </div>
                      <button onClick={() => handleRemoveFromCart(pro?._id)}>
                        <Icon
                          icon="material-symbols:delete-outline"
                          className="text-primary text-lg"
                        />
                      </button>
                      <hr />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="bg-white">
            <div className="flex items-center justify-between text-secondary z-50 h-10 px-4">
              <h1 className="text-lg font-bold">Total</h1>
              <p>{totalPrice().toFixed(2)} Tk</p>
            </div>

            <Link to={"/checkout/cart"} onClick={toggleDrawer}>
              {" "}
              <button className="bg-red-700 hover:bg-red-500 w-full py-1 font-bold">
                Checkout
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
