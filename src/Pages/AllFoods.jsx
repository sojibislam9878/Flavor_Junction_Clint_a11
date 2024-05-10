import { useEffect, useState } from "react";
import AllFoodCard from "../Components/AllFoodCard";

const AllFoods = () => {
  const [allFoodCards, setAllFoodCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/allfoods")
      .then((res) => res.json())
      .then((data) => {
        setAllFoodCards(data);
      });
  }, []);
  return (
    <div>
      {/* section header  */}
      <div className="bg-[#EA6A12] py-6 text-center">
        <h1 className="font-extrabold text-4xl text-white">All Foods</h1>
      </div>
      {/* scetion body  */}
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
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
        </div>

        {/* cards  */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {allFoodCards.map((food) => (
            <AllFoodCard key={food._id} food={food}></AllFoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
