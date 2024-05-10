

const GalleryCard = ({data}) => {
    const {displayName, Feedback , PhotoURL}=data ||{}
    return (
      <div className="card card-compact bg-base-200 shadow-xl h-full overflow-hidden group ">
        <div className="">
          <figure className="relativ overflow-hidden">
            <img src={PhotoURL}alt="Shoes" className="w-full lg:h-[484px] md:h-[735px] h-[285px] object-cover" />
            <div className="absolute h-1/5 w-full flex items-center justify-center bottom-10 group-hover:bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-700">
            </div>
            <div className="absolute h-full w-full bg-black bg-opacity-80 flex  flex-col gap-5 items-center justify-center -bottom-80 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="left-10 top-20 absolute ">
                    <h1 className="text-white">{displayName}</h1>
                    <p className="text-white mt-12 opacity-80">{Feedback}</p>
                </div>
            </div>
          </figure>
        </div>
      </div>
    );
};

export default GalleryCard;