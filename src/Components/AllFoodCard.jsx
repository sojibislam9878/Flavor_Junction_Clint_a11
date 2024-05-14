import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllFoodCard = ({food}) => {
    const {_id, food_name, food_category, price, quantity , photo_url} = food || {}
    const oldPrice = parseInt(price) + 6.99

    const slicedOldPrice = parseFloat(oldPrice.toString().slice(0,5))
    return (
        <div>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure>
          <img
            src={photo_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-4xl font-bold mt-4 font-garamond bg-gradient-to-r from-[#EA6A12] to-[#C75A0F] bg-clip-text text-transparent">{food_name}</h2>
          <p className="text-lg font-medium">{food_category}</p>
          <p className="flex gap-6 text-lg font-medium">$ {price} <span className="text-red-400"><del>$ {slicedOldPrice}</del></span></p>
          <p className="text-lg font-semibold">Quantity: {quantity}</p>
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
AllFoodCard.propTypes = {
    food: PropTypes.object
  };
export default AllFoodCard;