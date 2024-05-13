import aboutus from "../assets/images/aboutus.jpg"
const AboutUs = () => {
    return (
        <div className="lg:flex justify-between container mx-auto p-4 mt-36 gap-10">
            <div className="flex-1 border overflow-hidden rounded-lg">
                <img src={aboutus} alt="" className="scale-110 hover:scale-100 duration-500 transition-all w-full h-full m-auto object-cover grayscale hover:grayscale-0" />
            </div>
            <div className="flex-1 mt-14 lg:mt-0 h-full">
                <h1 className="text-4xl font-extrabold">Who We Are?</h1>
                <p className="leading-7 opacity-80 mt-6">Holisticly pursue market positioning ROI for 24/365 infomediaries. Progressively provide access to granular applications and business core competencies. Assertively myocardinate premier innovation through business schemas. Rapidiously empower standardized alignments whereas.</p>
                <div className="mt-8">
                    <div>
                        <h1 className="text-xl font-semibold">Milestones Achieved</h1>
                        <div className="bg-gray-200 rounded-full">
                        <div className="py-1 bg-green-400 w-[75%] mt-1 rounded-full"></div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-xl font-semibold">Pathways to Success</h1>
                        <div className="bg-gray-200 rounded-full">
                        <div className="py-1 bg-green-400 w-[65%] mt-1 rounded-full"></div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-xl font-semibold">Quantifying Our Impact</h1>
                        <div className="bg-gray-200 rounded-full">
                        <div className="py-1 bg-green-400 w-[90%] mt-1 rounded-full"></div>
                        </div>
                    </div>
                </div>
                <button className="btn mt-6 bg-[#EA6A12]  hover:bg-[#C75A0F] text-white" > Read More</button>
            </div>
        </div>
    );
};

export default AboutUs;