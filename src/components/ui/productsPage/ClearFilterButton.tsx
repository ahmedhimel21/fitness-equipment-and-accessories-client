import { clearFilters } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";

const ClearFilterButton = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button
        className="btn btn-secondary mt-4"
        onClick={() => dispatch(clearFilters())}
      >
        Clear Filters
      </button>
    </>
  );
};

export default ClearFilterButton;
