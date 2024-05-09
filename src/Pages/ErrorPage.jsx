
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="w-2/3 lg:w-2/5 mx-auto flex justify-between items-center">
          {/* <img src="0.png" alt="" /> */}
          <div className='flex-1'>
            <img src="4.png" alt="" />
          </div>
          <div className='flex-1'>
            <img src="0.png" alt="" />
          </div>
          <div className='flex-1'>
            <img src="4.png" alt="" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mt-7">Oppos! You Are Lost!</h1>
        <p className="text-lg font-medium text-red-600 mt-4">404 Not Found</p>
        <Link to="/">
          <button className="btn mt-4 bg-[#EA6A12] hover:bg-[#C75A0F] text-white text-xl">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;