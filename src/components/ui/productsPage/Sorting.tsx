import { Label, Select } from "flowbite-react";
import { setSort } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const Sorting = () => {
  const dispatch = useAppDispatch();
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "asc") {
      dispatch(setSort({ sort: "-price" }));
    }
    if (event.target.value === "desc") {
      dispatch(setSort({ sort: "price" }));
    }
  };
  return (
    <>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="countries" value="Select Price Range" />
        </div>
        <Select id="countries" onChange={handleSortChange}>
          <option value="">Price</option>
          <option value="asc">High To Low</option>
          <option value="desc">Low To High</option>
        </Select>
      </div>
    </>
  );
};

export default Sorting;
