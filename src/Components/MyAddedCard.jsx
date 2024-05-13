import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const MyAddedCard = ({card , reload, setReload}) => {
    const {food_name , price , food_origin, purchase_count , quantity , _id ,photo_url
    }= card || {}


    const handleDelete=_id=>{
        console.log('delete', _id);

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://assignment11-chi.vercel.app/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              setReload(!reload)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
          }
        });


        
    }
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
            {food_name}
          </h2>

          <div className="flex">
            <p className="text-lg font-medium opacity-70">{price} $</p>
            <p className="text-lg font-medium opacity-70 flex items-center gap-2">
              {food_origin} 
            </p>
          </div>
          <div className="">
            <p className="text-lg opacity-70">
              <span className=" font-medium">Purchase Count :</span>{" "}
              <span className="opacity-60">{purchase_count}</span>
            </p>
            <p className="text-lg opacity-70 ">
              <span className="font-medium">Quantity :</span>{" "}
              <span className="opacity-60">{quantity}</span>
            </p>
          </div>
          <div className="">
            <Link to={`/update/${_id}`}>
              <button className="flex justify-center items-center btn bg-blue-500 text-white hover:bg-blue-700 mt-6 w-full">
                {/* <MdOutlineEdit className="text-xl" />  */}
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
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
MyAddedCard.propTypes = {
    card: PropTypes.object,
    reload:PropTypes.bool,
    setReload: PropTypes.func
  };
export default MyAddedCard;