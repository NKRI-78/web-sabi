import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Search } from "lucide-react";
import { setSearch, fetchContentListAsync } from "@/redux/slices/contentSlice";
import { AppDispatch, RootState } from "@/redux/store";

interface SearchBarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

const SearchBar = ({ isSidebarOpen, setIsSidebarOpen }: SearchBarProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = usePathname();

  // const searchParams = useSearchParams();
  // const searchValue = searchParams.get("search");

  let placeholder;

  switch (pathname) {
    case "/features/vehicle":
      placeholder = "Ketik No Polisi / No Rangka / No Mesin";
      break;
    case "/features/register":
      placeholder = "Ketik Nomor Handphone";
      break;
    case "/features/nik":
      placeholder = "Ketik NIK / Nama";
      break;
    case "/features/cek-kk":
      placeholder = "Ketik NIK / Nama / No KK";
      break;
    default:
      placeholder = "Type anything";
      break;
  }

  const search = useSelector((state: RootState) => state.content.search);

  // const [showHistory, setShowHistory] = useState(false);

  // useEffect(() => {
  //   if (searchValue) {
  //     console.log("okee");
  //     dispatch(setSearch(searchValue!));
  //     dispatch(fetchContentListAsync(search));
  //   }
  // }, [searchValue]);

  const onSubmit = () => {
    if (!search.trim()) return;
    dispatch(fetchContentListAsync(search));
    // setShowHistory(false);
  };

  return (
    <header className="flex flex-col h-40 items-center justify-center p-4 relative bg-dark-blue">
      {!isSidebarOpen && (
        <div className="flex self-start">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu />
          </button>
        </div>
      )}

      {pathname !== "/auth/change-password" && pathname !== "/auth/profile" && (
        <div className="w-full my-4 max-w-xl relative">
          <input
            type="text"
            placeholder={placeholder}
            value={search}
            // onFocus={() => setShowHistory(true)}
            // onBlur={() => setTimeout(() => setShowHistory(false), 200)}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onSubmit();
              }
            }}
            className="w-full px-4 py-2 pr-10 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <Search
            onClick={onSubmit}
            className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          {/* {showHistory &&
            Array.isArray(contentHistories) &&
            contentHistories.length > 0 && (
              <ul className="absolute left-0 right-0 top-full mt-1 bg-white text-black rounded-md shadow-md z-50 max-h-40 overflow-y-auto">
                {contentHistories.map((item, index) => (
                  <li
                    key={index}
                    onMouseDown={() => {
                      dispatch(setSearch(item.query));
                      dispatch(fetchContentListAsync(item.query));
                      setShowHistory(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.query}
                  </li>
                ))}
              </ul>
            )} */}
        </div>
      )}
    </header>
  );
};

export default SearchBar;
