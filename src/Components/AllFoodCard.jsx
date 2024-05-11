import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllFoodCard = ({food}) => {
    const {_id, food_name, food_category, price, quantity , photo_url} = food || {}
    const oldPrice = parseInt(price) + 6.99

    const slicedOldPrice = parseFloat(oldPrice.toString().slice(0,5))
    return (
        <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{food_name}</h2>
          <p>{food_category}</p>
          <p className="flex gap-6">$ {price} <del>$ {slicedOldPrice}</del></p>
          <p>Quantity: {quantity}</p>
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