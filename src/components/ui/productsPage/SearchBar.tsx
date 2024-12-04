import { useCallback } from "react";
import { setSearchTerm } from "../../../redux/features/filter/filterSlice";
import { useAppDispatch } from "../../../redux/hooks";
import { AiOutlineSearch } from "react-icons/ai";
import _ from "lodash";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  // implementing debounce using lodash
  const debouncedSetSearchTerm = useCallback(
    _.debounce((term) => {
      dispatch(setSearchTerm(term));
    }, 500),
    []
  );
  return (
    <>
      <div className="flex items-center justify-center my-5">
        {/*Search Filtering */}
        <form>
          <div className="w-52 lg:w-[500px]">
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                onChange={(e) => {
                  debouncedSetSearchTerm(e.target.value);
                }}
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 rounded-md shadow-md border-l-2 border border-gray-300 focus:ring-primary focus:border-primary "
                placeholder="Search Products..."
                required
              />

              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-r-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                <AiOutlineSearch className="text-2xl" />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
