import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateCard = () => {
    const {id} = useParams()
    const [updateCard, setUpdateCard]=useState({})
    const {food_name , description, photo_url,food_category, quantity , price, food_origin }=updateCard
    console.log(food_name);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

    useEffect(()=>{
        fetch(`http://localhost:3000/singleFood/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setUpdateCard(data)
        })
    }, [id])

    const onSubmit=data=>{
        console.log(data);
        fetch(`http://localhost:3000/updateCard/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          console.log("succes");
          reset();
        }
      });
    }
    return (
        <div className="container md:mb-28 mb-12 mt-6 mx-auto p-4 bg-base-300 md:mt-10 rounded-lg shadow-xl">
      {/* section header  */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6">Add a new food</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" pb-16 pt-10 md:px-28">
        <div className="md:grid grid-cols-2 gap-6">
          <div>
            <p className="font-bold opacity-70">Food Name :</p>
            <input
              type="text"
              defaultValue={food_name}
              placeholder="Food Name"
              {...register("food_name", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.food_name && (
              <span className="text-red-600">Give a Update value</span>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Photo URL :</p>
            <input
              type="text"
              defaultValue={photo_url}
              placeholder="Photo URL"
              {...register("photo_url", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.photo_url && (
              <span className="text-red-600">Give a Update value</span>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Food Category :</p>
            <input
              type="text"
              defaultValue={food_category}
              placeholder="Food Category "
              {...register("food_category", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.food_category && (
              <span className="text-red-600">Give a Update value</span>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Quantity :</p>
            <input
              type="text"
              defaultValue={quantity}
              placeholder="Quantity"
              {...register("quantity", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.quantity && (
              <span className="text-red-600">Give a Update value</span>
            )}
          </div>

          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Price :</p>
            <input
              type="text"
              defaultValue={price}
              placeholder="Price"
              {...register("price", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.price && <span className="text-red-600">Give a Update value</span>}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Food Origin :</p>
            <input
              type="text"
              defaultValue={food_origin}
              {...register("food_origin", { required: true })}
              placeholder="Food Origin"
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
            />
            {errors.food_origin && (
              <span className="text-red-600">Give a Update value</span>
            )}
          </div>
        </div>
        <div className="mt-4 md:mt-6">
          <p className="font-bold opacity-70">Short Description :</p>
          <input
            type="text"
            defaultValue={description}
            placeholder="Short Description"
            {...register("description", { required: true })}
            className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-base-100"
          />
          {errors.description && (
            <span className="text-red-600">Give a Update value</span>
          )}
        </div>
        <input
          type="submit"
          value="Add"
          className="border w-full btn mt-6 text-lg font-bold"
        />
      </form>
    </div>
    );
};

export default UpdateCard;