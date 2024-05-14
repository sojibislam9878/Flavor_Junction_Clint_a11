import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const FoodPurchase = () => {
  const {user}= useAuth()
  const { displayName}= user || {}

    const {id}=useParams()
    const [singleFood, setSingleFood]=useState({})
    const [reload , setReload]= useState(true)
    useEffect(()=>{
      fetch(`https://assignment11-chi.vercel.app/singleFood/${id}`)
      .then(res=>res.json())
      .then(data=>{
        setSingleFood(data)
        console.log(data);
      })
    },[id, reload])

  

    const {_id, food_name, price, quantity ,photo_url, made_by,email} = singleFood || {}
    console.log(photo_url);

    if (quantity == 0) { Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "Item is not avaliable",
      });
    }
    const date = new Date().toLocaleDateString('en-GB')
    console.log(date);


    

const handlePurchase = e => {
  e.preventDefault()
  if ( user?.email === email ) {
    return Swal.fire({
      icon: "error",
      title: "Sorry",
      text: "You can't buy your own product",
    });
  }
  const foodName =e.target.foodName.value
  const price =e.target.price.value
  const quantitys =e.target.quantity.value

  console.log(quantity, quantitys);

  const purchaseFood = {foodName, price, quantitys}
  const purchaseFoodData = {...purchaseFood, buyerEmail:user?.email, buyerName:displayName , photo_url, made_by , date}
  if (quantitys>quantity) {
    return Swal.fire({
      icon: "error",
      title: "Sorry",
      text: `available quantity is ${quantity}. You can not buy more than this`,
    })
  }
  console.log(purchaseFoodData);
  e.target.reset()

  fetch(`https://assignment11-chi.vercel.app/purchaseFoods?id=${_id}&quantitys=${quantitys}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchaseFoodData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your purchase success",
              showConfirmButton: false,
              timer: 1500
            });
            e.target.reset()
            setReload(!reload)
        }
      });


}

    
    return (
        <div className="container md:mb-28 mb-12 mt-6 mx-auto p-4 bg-[#FAF9F5] md:mt-10 rounded-lg shadow-xl">
      {/* section header  */}
      <Helmet>
        <title>{`Flavor Junction | Purchase ${food_name}`}</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6">Place your Order</h1>
      </div>


      <form onSubmit={handlePurchase} className=" pb-16 pt-10 md:px-28">
        <div className="md:grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <p className="font-bold opacity-70">Food Name :</p>
            <input
              type="text"
              placeholder="Food Name"
              defaultValue={food_name}
              required
              name="foodName" 
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Price :</p>
            <input
              type="text"
              defaultValue={price}
              required
              placeholder="Price"
              name="price"
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Quantity :</p>
            <input
              type="number"
              placeholder="Quantity"
              defaultValue={1}
              required
              name="quantity"
              className=" py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
          </div>
          {/* <div className="mt-4 md:mt-0 border">
            <p className="font-bold opacity-70">Buying Date:</p>
            <div className="py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white border">
            <DatePicker name="date" className=" focus:outline-none" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div> */}
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Buyer email :</p>
            <input
              type="text"
              defaultValue={user?.email}
              readOnly
              className="py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-bold opacity-70">Buyer Name :</p>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="py-4 w-full  rounded-lg md:mt-3 px-4 outline-none bg-white"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Purchase"
          disabled={quantity<=0?true:false}
          className={`border w-full btn mt-6 text-lg font-bold bg-[#EA6A12]  hover:bg-[#C75A0F] text-white`}
        />
      </form>
    </div>
    );
};

export default FoodPurchase;