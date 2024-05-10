import { Link } from "react-router-dom";

const TopFoodsCard = ({food}) => {
    const {_id, food_name, photo_url, food_category, price} = food || {}
    const oldPrice = parseInt(price) + 6.99

    const slicedOldPrice = parseFloat(oldPrice.toString().slice(0,5))

    console.log(slicedOldPrice);
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{food_name}</h2>
          <p>{food_category}</p>
          <p className="flex gap-6">$ {price} <del>$ {slicedOldPrice}</del></p>
          <div className="card-actions">
            <Link to={`/details/${_id}`}>
            <button className="btn bg-[#EA6A12] text-white hover:bg-[#C75A0F]">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFoodsCard;
