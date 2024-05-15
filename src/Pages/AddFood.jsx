import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddFood = () => {
  const { user } = useAuth();
  const { email, displayName } = user || {};
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const purchase_count = 0;

  const onSubmit = (data) => {
    const fullData = { ...data, email, displayName, purchase_count };

    fetch("https://assignment11-chi.vercel.app/allfoods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your food has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };
  return (
    <div className="container md:mb-28 mb-12 mt-6 mx-auto p-4 bg-[#FAF9F5] md:mt-10 rounded-lg shadow-xl">
      {/* section header  */}
      <Helmet>
        <title>Flavor Junction | Add Foods</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6">Add new food</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" pb-16 pt-10 md:px-28">
        <div className="md:grid grid-cols-2 gap-6">
          <div>
            <p className="font-bold opacity-70">Food Name :</p>
            <input
              type="text"
              placeholder="Food Name"
              {...register("food_name", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
            {errors.food_name && (
              <span className="text-red-600">Enter food name</span>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Photo URL :</p>
            <input
              type="text"
              placeholder="Photo URL"
              {...register("photo_url", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
            {errors.photo_url && (
              <span className="text-red-600">Give a Photo URL</span>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Food Category :</p>
            <input
              type="text"
              placeholder="Food Category "
              {...register("food_category", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
            {errors.food_category && (
              <span className="text-red-600">Write Food Category</span>
            )}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Quantity :</p>
            <input
              type="text"
              placeholder="Quantity"
              {...register("quantity", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
            {errors.quantity && (
              <span className="text-red-600">Give Quantity</span>
            )}
          </div>

          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Price :</p>
            <input
              type="text"
              placeholder="Price"
              {...register("price", { required: true })}
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
            {errors.price && <span className="text-red-600">Enter price</span>}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Food Origin :</p>
            <input
              type="text"
              {...register("food_origin", { required: true })}
              placeholder="Food Origin"
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
            {errors.food_origin && (
              <span className="text-red-600">What is the origin</span>
            )}
          </div>

          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">User email :</p>
            <input
              type="text"
              defaultValue={email}
              readOnly
              className="py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">User name :</p>
            <input
              type="text"
              defaultValue={displayName}
              readOnly
              className="py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
          </div>
        </div>
        <div className="mt-4 md:mt-6">
          <p className="font-bold opacity-70">Short Description :</p>
          <input
            type="text"
            placeholder="Short Description"
            {...register("description", { required: true })}
            className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
          />
          {errors.description && (
            <span className="text-red-600">Write a short description</span>
          )}
        </div>
        <input
          type="submit"
          value="Add"
          className="border w-full bg-[#EA6A12]  hover:bg-[#C75A0F] text-white btn mt-6 text-lg font-bold"
        />
      </form>
    </div>
  );
};

export default AddFood;
