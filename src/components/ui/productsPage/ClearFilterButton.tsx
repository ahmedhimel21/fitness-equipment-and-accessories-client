import { Button } from "flowbite-react";
import { clearFilters } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const ClearFilterButton = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="mx-auto">
      <Button color="failure" onClick={() => dispatch(clearFilters())}>
        Clear Filters
      </Button>
    </div>
  );
};

export default ClearFilterButton;
