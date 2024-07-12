import MainLayout from "./components/layouts/MainLayout";
import { useBeforeunload } from "react-beforeunload";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

function App() {
  const cart = useAppSelector((state: RootState) => state.cart.items);
  useBeforeunload((event) => {
    if (cart.length > 0) {
      event.preventDefault();
    }
  });
  return (
    <>
      <MainLayout></MainLayout>
    </>
  );
}

export default App;
