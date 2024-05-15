import { useEffect, useState } from "react";
import TopFoodsCard from "./TopFoodsCard";
import { Link } from "react-router-dom";

const TopFoodsSection = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://assignment11-chi.vercel.app/allfoods")
      .then((res) => res.json())
      .then((data) => {
        const sixFoods = data.slice(0, 6);

        const sortFoods = sixFoods.sort(
          (a, b) => b.purchase_count - a.purchase_count
        );
        setFoods(sortFoods);
      });
  }, []);

  return (
    <div className="mt-8 lg:mt-36 md:mt-28 md:py-8 container mx-auto p-4">
      {/* section header */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6 font-play">Top Foods</h1>
        <p className="leading-7 opacity-80 mt-6 lg:w-2/3 mx-auto">
          Indulge in the epitome of culinary excellence with our Top Food
          section. Here, we curate the finest recipes, chef secrets, and
          gastronomic trends to tantalize your taste buds and elevate your
          dining experiences.
        </p>
      </div>
      {/* top foods card */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {foods.map((food) => (
          <TopFoodsCard key={food._id} food={food}></TopFoodsCard>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to="allfoods">
          <button className=" px-6 py-3 bg-[#EA6A12] rounded-sm text-white hover:bg-[#C75A0F]">
            see all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoodsSection;
