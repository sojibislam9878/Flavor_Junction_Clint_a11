import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import GalleryCard from "../Components/GalleryCard";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Spinner from "../Components/Spinner";
import galleryphoto from "../assets/images/gallery.png"

const Gallery = () => {
  const { user } = useAuth();
  const {displayName}=user || {}
  const [galleryData, setGalleryData]=useState([])
  const [loading , setloading]=useState(true)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const finalData = {...data, displayName}
    fetch("https://assignment11-chi.vercel.app/gallery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("succes");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfuly added",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
  };

  useEffect(()=>{
    fetch("https://assignment11-chi.vercel.app/gallery")
    .then(res=>res.json())
    .then(data=>{
        setGalleryData(data)
        setloading(false)
    })
  },[])
console.log(galleryData);
if (loading) {
  return <Spinner></Spinner>
}
  return (
    <div  className=' md:mb-36 mb-8'>
       <Helmet>
        <title>Flavor Junction | Gallery</title>
      </Helmet>
        <div style={{
              backgroundImage:
              `linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${galleryphoto})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }} className="text-center py-16 md:my-16">
        <div>
        <h1 className="font-extrabold text-4xl font-play text-white">Gallery</h1>
        <div className="flex justify-center text-white">
           <div className="text-sm breadcrumbs">
            <ul>
              <li><a>Home</a></li> 
              <li><a>Gallery</a></li> 
            </ul>
           </div>
        </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        
        {/* The button to open modal */}
        <div className="flex justify-end  my-6">
          <div>
          <div>
          {
            user?(<label htmlFor="my_modal_6" className="btn animate-bounce bg-blue-600 hover:bg-blue-800 text-white">
            Add
          </label>):(<Link to="/login"><label htmlFor="" className="btn bg-[#999] hover:bg-[#999] text-white">
              Add
            </label></Link>)
          
          }
          </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="md:grid grid-cols-2 gap-6">
                    <div>
                      <p className="font-bold opacity-70">Name :</p>
                      <input
                        type="text"
                        defaultValue={user?.displayName}
                        readOnly
                        className=" py-4 w-full  rounded-lg md:mt-3  border-2 pl-2 outline-none bg-base-100"
                      />
                    </div>
                    <div className="mt-4 md:mt-0">
                      <p className="font-bold opacity-70">Feedback :</p>
                      <input
                        type="text"
                        placeholder="Feedback"
                        {...register("Feedback", { required: true })}
                        className=" py-4 w-full  rounded-lg md:mt-3  border-2 pl-2 outline-none bg-base-100"
                      />
                      {errors.Feedback && (
                        <span className="text-red-600">Write something</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <p className="font-bold opacity-70">Image URL :</p>
                    <input
                      type="url"
                      placeholder="Photo URL"
                      {...register("PhotoURL", { required: true })}
                      className=" py-4 w-full  rounded-lg md:mt-3  border-2 pl-2 outline-none bg-base-100"
                    />
                    {errors.PhotoURL && (
                      <span className="text-red-600">Give a Photo URL</span>
                    )}
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="border w-full btn mt-6 text-lg font-bold"
                  />
                </form>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Close!
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        


        {/* stucture */}

        <div className="grid lg:grid-cols-3 gap-6">
        {
            galleryData.map(data=><GalleryCard key={data._id} data={data}></GalleryCard>)
        }
    </div> 
      </div>
    </div>
  );
};

export default Gallery;
