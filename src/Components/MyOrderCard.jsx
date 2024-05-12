import PropTypes from 'prop-types';

const MyOrderCard = ({card}) => {
    const {foodName , price , food_origin, date , quantitys , photo_url, made_by
    }= card || {}
    return (
        <div>
        <div className="card card-compact bg-base-100 shadow-xl h-full">
          <figure>
            <img
              className="w-full lg:h-[484px] md:h-[735px] h-[285px] object-cover  transition duration-300 hover:scale-105"
              src={photo_url}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-4xl font-bold mt-4 font-garamond bg-gradient-to-r from-[#B18B5E] to-[#d6aa76] bg-clip-text text-transparent">
              {foodName}
            </h2>
  
            <div className="flex">
              <p className="text-lg font-medium opacity-70">{price} $</p>
              <p className="text-lg font-medium opacity-70 flex items-center gap-2">
                {food_origin} 
              </p>
            </div>
            <div className="">
              <p className="text-lg opacity-70">
                <span className=" font-medium">Buying Date :</span>{" "}
                <span className="opacity-60">{date}</span>
              </p>
              <p className="text-lg opacity-70 ">
                <span className="font-medium">Quantity :</span>{" "}
                <span className="opacity-60">{quantitys}</span>
              </p>
              <p className="text-lg opacity-70 ">
                <span className="font-medium">Made by :</span>{" "}
                <span className="opacity-60">{made_by || "unknown"}</span>
              </p>
            </div>
            <div className="">
              <button
                // onClick={() => handleDelete(_id)}
                className="btn w-full bg-red-500 text-white hover:bg-red-700 mt-2"
              >
                {/* <RiDeleteBin2Fill className="text-xl" /> */}
                 Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};
MyOrderCard.propTypes = {
    card: PropTypes.object,
    reload:PropTypes.bool,
    setReload: PropTypes.func
  };
export default MyOrderCard;