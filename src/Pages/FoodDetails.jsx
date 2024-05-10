import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
    const {id} =useParams()
    const [singleFood, setSingleFood]=useState({})

    useEffect(()=>{
      fetch(`http://localhost:3000/singleFood/${id}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setSingleFood(data)
      })
    },[id])

    const { food_name, food_category, price, description , made_by , 
      food_origin} = singleFood || {}


    return (
        <div className="container mx-auto p-4">
            <h1>I am food details of {id}</h1>
            <div className="lg:flex gap-4 mt-12 container mx-auto p-4 shadow-lgrounded-xl bg-base-200 md:mb-28 mb-12">
      
      <div className=" lg:w-1/3 flex justify-center items-center">
        <img
          className="h-full w-full object-cover rounded-xl"
          src="photo"
          alt=""
        />
      </div>
      <div className=" lg:w-2/3 mt-6 lg:mt-0">
        <h1 className="text-4xl font-bold playfair">{food_name}</h1>
        <p className="text-xl font-medium opacity-80 mt-4">
          {description}
        </p>
        <div className="">
          <h6 className="border-y-2 text-xl font-medium opacity-80 py-4 mt-6">
           Price:$ {price}
          </h6>
        </div>
        <div className="mt-6">
          <table className="w-full lg:w-2/3">
            <tbody>
            <tr className="">
              <td className="w-2/3 opacity-70">Food Category</td>
              <td className="font-medium">{food_category}</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Food Origin</td>
              <td className="font-medium">{food_origin}</td>
            </tr>
            <tr className="">
              <td className="w-2/3 opacity-70">Made By</td>
              <td className="font-medium">{made_by}</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className=" pb-5 mt-7">
          <button className="bg-[#EA6A12] hover:bg-[#C75A0F] transition-all duration-300 p-5 mt-3 w-full rounded-lg text-white font-medium flex justify-center items-center gap-3">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span>Purchase Now</span>
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default FoodDetails;