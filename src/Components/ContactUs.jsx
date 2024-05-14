const ContactUs = () => {
    return (
        <div className="container mx-auto p-4 bg-white mt-8 lg:mt-36 md:mt-28 mb-8 md:mb-36 rounded-xl">
            {/* section header */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mt-6 font-play">
          Lets Stay In Touch
        </h1>
        <p className="leading-7 opacity-80 mt-6 lg:w-2/3 mx-auto">
          Your brige to meaningful commuication and personalized assistance, we are here to listen and assist you.
        </p>
      </div>
      <div className="p-4 rounded-xl mt-10">
        <div className="md:flex gap-4">
          <input
            type="text"
            className=" p-4 bg-[#f7f5f4] rounded-lg mt-2  w-full focus:outline-none"
            placeholder="First Name"
          />
          <input
            type="text"
            className=" p-4 bg-[#f7f5f4] rounded-lg mt-2  w-full focus:outline-none"
            placeholder="Last Name"
          />
        </div>
        <div className="lg:flex gap-4">
          <input
            type="text"
            className=" p-4 bg-[#f7f5f4] rounded-lg mt-2 w-full focus:outline-none"
            placeholder="Your Email"
          />
        </div>
        <textarea
          className=" w-full bg-[#f7f5f4] rounded-lg mt-3 h-52 p-2 focus:outline-none "
          placeholder="Your messages"
        ></textarea>
        <button className="btn w-full bg-[#EA6A12] hover:bg-[#C75A0F] text-white"> Submit</button>
      </div>
            
        </div>
    );
};

export default ContactUs;