import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import ProductManagement from "../pages/ProductManagement";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AboutUs from "../pages/AboutUs";
import SuccessPage from "../components/ui/checkout/SuccessPage";
import UpdateForm from "../components/ui/productManagement/UpdateForm";
import CreateProductForm from "../components/ui/productManagement/CreateProductForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/products",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Products></Products>,
      },
      {
        path: "management",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "success",
        element: <SuccessPage></SuccessPage>,
      },
      {
        path: "update/:id",
        element: <UpdateForm></UpdateForm>,
      },
      {
        path: "create-product",
        element: <CreateProductForm></CreateProductForm>,
      },
    ],
  },
]);

export default router;
