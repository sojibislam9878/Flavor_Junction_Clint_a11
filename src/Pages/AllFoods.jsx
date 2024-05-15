import { useEffect, useState } from "react";
import AllFoodCard from "../Components/AllFoodCard";
import { Helmet } from "react-helmet";
import Spinner from "../Components/Spinner";
import allfoodsphoto from "../assets/images/allfoods.png";

const AllFoods = () => {
  const [allFoodCards, setAllFoodCards] = useState([]);
  const cardPerPage = 6;
  const [dataCount, setDataCount] = useState(1);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [serchText, setSearchText] = useState("");
  const totalPage = Math.ceil(dataCount / cardPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [...Array(totalPage).keys()].map((i) => i + 1);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(
      `https://assignment11-chi.vercel.app/allFoodsForPagination?page=${currentPage}&size=${cardPerPage}&filter=${filter}&sort=${sort}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllFoodCards(data);
        setloading(false);
      });
  }, [currentPage, cardPerPage, filter, sort, search]);

  useEffect(() => {
    fetch(
      `https://assignment11-chi.vercel.app/allFoodsCont?filter=${filter}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataCount(data.count);
        setloading(false);
      });
  }, [filter, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(serchText);
  };

  const handleCurrentPage = (val) => {
    setCurrentPage(val);
  };

  const handleNextBtn = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevioustBtn = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleReset = () => {
    setFilter("");
    setSort("");
    setSearchText("");
  };

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      {/* section header  */}
      <Helmet>
        <title>Flavor Junction | ALL Foods</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${allfoodsphoto})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className=" py-16 text-center md:my-16"
      >
        <div>
          <h1 className="font-extrabold font-play text-4xl text-white">
            All Foods
          </h1>
          <div className="flex justify-center text-white">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>All Foods</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* scetion body  */}
      <div className="container mx-auto p-4">
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-5 gap-2">
            <div>
              <select
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
                name="category"
                id="category"
                className="border p-4 rounded-lg"
              >
                <option value="">Food Category</option>
                <option value="Thai">Thai</option>
                <option value="Italian">Italian</option>
                <option value="American">American</option>
                <option value="Dessert">Dessert</option>
                <option value="Bakery">Bakery</option>
                <option value="Indian">Indian</option>
                <option value="Japanese">Japanese</option>
                <option value="Salad">Salad</option>
                <option value="Appetizer">Appetizer</option>
              </select>
            </div>

            <form onSubmit={handleSearch}>
              <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                  value={serchText}
                  className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                  type="text"
                  name="search"
                  placeholder="Enter Job Title"
                  aria-label="Enter Job Title"
                />

                <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                  Search
                </button>
              </div>
            </form>
            <div>
              <select
                onChange={(e) => {
                  setSort(e.target.value);
                }}
                value={sort}
                name="category"
                id="category"
                className="border p-4 rounded-md"
              >
                <option value="">Sort By Price</option>
                <option value="high">High to Low</option>
                <option value="low">Low to High</option>
              </select>
            </div>
            <button
              onClick={handleReset}
              className="btn bg-green-300 hover:bg-green-600"
            >
              Reset
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
        </div>

        {/* <div className="flex justify-center">
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item focus:outline-none"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select select-bordered join-item focus:outline-none hidden md:flex">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div> */}

        {/* cards  */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {allFoodCards.map((food) => (
            <AllFoodCard key={food._id} food={food}></AllFoodCard>
          ))}
        </div>
        <div className="md:mb-36  mb-8">
          <div className="flex justify-center mt-12">
            <button
              onClick={handlePrevioustBtn}
              className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
            >
              <div className="flex items-center -mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-1 rtl:-scale-x-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>

                <span className="mx-1">previous</span>
              </div>
            </button>

            {pages.map((btnNum) => (
              <button
                onClick={() => handleCurrentPage(btnNum)}
                key={btnNum}
                className={`hidden ${
                  currentPage === btnNum ? "bg-blue-500 text-white" : undefined
                } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
              >
                {btnNum}
              </button>
            ))}

            <button
              onClick={handleNextBtn}
              className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
            >
              <div className="flex items-center -mx-1">
                <span className="mx-1">Next</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-1 rtl:-scale-x-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
