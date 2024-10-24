import React, { useContext, useState, useEffect } from 'react';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);
  const [recommendations, setRecommendations] = useState([]); // State to store search suggestions

  // Fetch search recommendations based on user input
  const fetchSearchRecommendations = async (query) => {
    if (query.length < 2) {
      setRecommendations([]);
      return;
    }
    try {
      const response = await fetch(`/api/products/search?q=${query}`);
      const data = await response.json();
      if (data.success) {
        setRecommendations(data.data); // Set the product data from the backend
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error fetching search recommendations");
    }
  };

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include',
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    fetchSearchRecommendations(value); // Fetch recommendations when typing
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion.productName);
    setRecommendations([]); // Clear recommendations after selection
    navigate(`/product/${suggestion._id}`);
  };

  return (
    <header className="h-16 shadow-md bg-white w-full">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="my-auto p-auto">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>

        <div className="relative w-full max-w-sm">
          <div className="flex shadow-lg items-center justify-between border rounded-full focus-within:shadow pl-4 sm:flex hidden">
            <input
              type="text"
              placeholder="Search product here..."
              className="w-full outline-none h-8"
              onChange={handleSearch}
              value={search}
            />
            <div className="text-2xl min-w-[50px] h-8 bg-transparent flex items-center justify-center rounded-r-full text-neutral-950 text-pretty cursor-pointer">
              <GrSearch />
            </div>
          </div>

          {/* Recommendations Dropdown */}
          {recommendations.length > 0 && (
            <ul className="absolute bg-white shadow-lg w-full max-h-60 overflow-y-auto z-20 mt-1">
              {recommendations.map((item) => (
                <li
                  key={item._id}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item.productName} {/* Display only the product names */}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-4 sm:gap-2 md:gap-4 lg:gap-8">
          <div className="relative flex justify-center items-center">
            {user?._id && (
              <div
                className="text-3xl cursor-pointer relative flex justify-center"
                onClick={() => setMenuDisplay((preve) => !preve)}
              >
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    className="w-10 h-10 rounded-full"
                    alt={user?.name}
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}
            {user?.role === ROLE.ADMIN &&
              menuDisplay && (
                <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                  <nav>
                    <Link
                      to={"/admin-panel/all-products"}
                      className="whitespace-nowrap hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay((preve) => !preve)}
                    >
                      Admin Panel
                    </Link>
                  </nav>
                </div>
              )}
          </div>

          {user?._id && (
            <Link to={"/cart"} className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>

              <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">{context?.cartProductCount}</p>
              </div>
            </Link>
          )}

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
