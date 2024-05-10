import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const FoodPurchase = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    const {id}=useParams()
    const [singleFood, setSingleFood]=useState({})

    useEffect(()=>{
      fetch(`http://localhost:3000/singleFood/${id}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setSingleFood(data)
      })
    },[id])

    const { food_name, price, quantity} = singleFood || {}
    console.log(food_name, price, quantity);

const onSubmit = data => {
    console.log(data);
    reset()
}

    
    return (
        <div className="container md:mb-28 mb-12 mt-6 mx-auto p-4 bg-base-300 md:mt-10 rounded-lg shadow-xl">
      {/* section header  */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6">Place your Order</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" pb-16 pt-10 md:px-28">
        <div className="md:grid grid-cols-2 gap-6">
          <div>
            <p className="font-bold opacity-70">Item Name :</p>
            <input
              type="text"
              placeholder="Item Name"
              {...register("item_name", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.item_name && (
              <span className="text-red-600">Enter item name</span>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Price :</p>
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.price && <span className="text-red-600">Enter price</span>}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Rating :</p>
            <input
              type="text"
              placeholder="Rating "
              {...register("rating", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.rating && (
              <span className="text-red-600">Give a default rating</span>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Processing Time :</p>
            <input
              type="text"
              placeholder="Processing Time"
              {...register("processing_time", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.processing_time && (
              <span className="text-red-600">Processing time</span>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">User email :</p>
            <input
              type="text"
              defaultValue="email"
              readOnly
              className="py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">User name :</p>
            <input
              type="text"
              defaultValue="displayName"
              readOnly
              className="py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Purchase"
          className="border w-full btn mt-6 text-lg font-bold"
        />
      </form>
    </div>
    );
};

export default FoodPurchase;