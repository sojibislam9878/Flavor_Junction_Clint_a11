import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import MyAddedCard from "../Components/MyAddedCard";
import Spinner from "../Components/Spinner";
import { Helmet } from "react-helmet";

const MyAddedFoods = () => {
const {user} = useAuth()
const {email} =user || {}

console.log(email);
const [loading , setloading]= useState(true)

    const [myAddedFoods, setMyAddedFoods]=useState([])

    useEffect(()=>{
        fetch(`https://assignment11-chi.vercel.app/myaddedfoods/${email}` , {credentials: "include"})
        .then(res=>res.json())
        .then(data=>{
            setMyAddedFoods(data)
            setloading(false)
        })
    },[email ])

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className="container mx-auto p-4">
            <Helmet>
        <title>Food Junction | My Added Foods</title>
      </Helmet>
            <h1>my added foods</h1>
            <div className="grid lg:grid-cols-3 gap-6 mt-14">
            {
                myAddedFoods.map(card=><MyAddedCard key={card._id} card={card}></MyAddedCard>)
            }
            </div>
        </div>
    );
};

export default MyAddedFoods;