import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import GalleryCard from "../Components/GalleryCard";

const Gallery = () => {
  const { user } = useAuth();
  const {displayName}=user || {}
  const [galleryData, setGalleryData]=useState([])
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const finalData = {...data, displayName}
    fetch("http://localhost:3000/gallery", {
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
          alert("added")
        }
      });
  };

  useEffect(()=>{
    fetch("http://localhost:3000/gallery")
    .then(res=>res.json())
    .then(data=>{
        setGalleryData(data)
    })
  },[])
console.log(galleryData);
  return (
    <div>
        <div className="bg-[#EA6A12] py-6 text-center">
        <h1 className="font-extrabold text-4xl text-white">Gallery</h1>
      </div>
      <div className="container mx-auto p-4">
        
        {/* The button to open modal */}
        <div className="flex justify-end  my-6">
          <div>
            <label htmlFor="my_modal_6" className="btn animate-pulse bg-blue-800 text-white">
              Add
            </label>

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
