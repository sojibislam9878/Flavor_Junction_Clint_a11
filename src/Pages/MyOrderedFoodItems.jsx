import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import MyOrderCard from "../Components/MyOrderCard";

const MyOrderedFoodItems = () => {
    const {user}=useAuth()
    const [reload, setReload]=useState(false)
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:3000/purchaseFoods/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[user ,reload])
    return (
        <div className="container mx-auto p-4">
            <div  className="grid lg:grid-cols-3 gap-6 mt-14">
                {
                    data.map(card=><MyOrderCard key={card._id} card={card} reload={reload} setReload={setReload}></MyOrderCard>)
                }
            </div>
        </div>
    );
};

export default MyOrderedFoodItems;