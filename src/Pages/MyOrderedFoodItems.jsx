import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import MyOrderCard from "../Components/MyOrderCard";
import { Helmet } from "react-helmet";
import Spinner from "../Components/Spinner";

const MyOrderedFoodItems = () => {
    const {user}=useAuth()
    const [reload, setReload]=useState(false)
    const [data, setData]=useState([])
    const [loading , setloading]= useState(true)
    useEffect(()=>{
        fetch(`https://assignment11-chi.vercel.app/purchaseFoods/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            setloading(false)
        })
    },[user ,reload])
    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="container mx-auto p-4">
            <Helmet>
        <title>Food Junction | My Ordered Foods</title>
      </Helmet>
            <div  className="grid lg:grid-cols-3 gap-6 mt-14">
                {
                    data.map(card=><MyOrderCard key={card._id} card={card} reload={reload} setReload={setReload}></MyOrderCard>)
                }
            </div>
        </div>
    );
};

export default MyOrderedFoodItems;