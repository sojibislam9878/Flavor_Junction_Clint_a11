import { useParams } from "react-router-dom";

const FoodDetails = () => {
    const {id} =useParams()
    return (
        <div>
            <h1>I am food details of {id}</h1>
        </div>
    );
};

export default FoodDetails;