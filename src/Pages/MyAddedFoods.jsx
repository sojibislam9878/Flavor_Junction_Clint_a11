import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import MyAddedCard from "../Components/MyAddedCard";

const MyAddedFoods = () => {
const {user} = useAuth()
const {email} =user || {}
const [reload, setReload]=useState(false)

console.log(email);

    const [myAddedFoods, setMyAddedFoods]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/myaddedfoods/${email}` , {credentials: "include"})
        .then(res=>res.json())
        .then(data=>{
            setMyAddedFoods(data)
        })
    },[email , reload])
    return (
        <div className="container mx-auto p-4">
            <h1>my added foods</h1>
            <div className="grid lg:grid-cols-3 gap-6 mt-14">
            {
                myAddedFoods.map(card=><MyAddedCard key={card._id} card={card} reload={reload} setReload={setReload}></MyAddedCard>)
            }
            </div>
        </div>
    );
};

export default MyAddedFoods;