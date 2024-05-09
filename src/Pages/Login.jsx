import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
//     const Locations = useLocation();
//   const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
//   const { login, googleSignUP, githubSignUP } = useAuth();
  const onSubmit = (data) => {
        console.log(data);
  };

  const [isHide, setIsHide] = useState(false);
  const handleHide = () => {
    setIsHide(!isHide);
  };
    return (
        <div className=" bg-gradient-to-tr pb-10 from-indigo-500 via-purple-500 to-pink-500">
        {/* <Helmet>
          <title>Login</title>
        </Helmet> */}
        <div className="flex justify-center items-center p-4 pt-10 pb-12 ">
          <div className=" rounded-lg p-6  md:w-2/3 xl:w-1/3 mx-auto shadow-xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-4xl font-bold mt-12">Login Your Account.</h1>
              <p className="font-medium mt-6 opacity-70">
                Thank you for get back to Carfty Corner, let accesss our the best
                recommendation for you
              </p>
              <div className=" flex justify-center items-center gap-2 border-b-2">
                <span className="material-symbols-outlined mt-10 text-2xl">
                  alternate_email
                </span>
                <input
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="w-full py-4  outline-none mt-10 bg-base-100"
                />
              </div>
              {errors.email && <span className="text-red-600">Enter Email</span>}
              <div className="relative">
                <div className=" flex justify-center items-center gap-2 border-b-2">
                  <span className="material-symbols-outlined mt-6 text-2xl">
                    lock
                  </span>
                  <input
                    type={isHide ? "text" : "password"}
                    placeholder="password"
                    {...register("password", { required: true })}
                    className="w-full py-4 outline-none mt-6 bg-base-100"
                  />
                </div>
                <p
                  className="absolute right-5 top-11 hover:cursor-pointer"
                  onClick={handleHide}
                >
                  {isHide ? (
                    <span className="material-symbols-outlined">
                      visibility_off
                    </span>
                  ) : (
                    <span className="material-symbols-outlined">visibility</span>
                  )}
                </p>
              </div>
              {errors.password && (
                <span className="text-red-600">Enter Password</span>
              )}
              <p className="flex justify-end text-blue-500 font-bold my-8">
                Forgot your Password ?
              </p>
              <input
                type="submit"
                value="Sign In"
                className="btn w-full bg-blue-500 text-white text-lg border-none"
              />
            </form>
            <p className="text-center mt-6 mb-8 font-medium opacity-80 text-lg">
              <span className="opacity-80">Do not have an account?</span>{" "}
              <Link to="/registration">
                <span className="text-blue-500 font-bold">Register Here</span>
              </Link>
            </p>
            <div className="divider">OR</div>
            {/* social login */}
            <div className="flex justify-center flex-wrap gap-x-8 gap-y-3 mt-8 mb-16">
              <button 
            //   onClick={googleSignUP} 
              className="btn flex items-center">
                <img className="w-12 " src="google.png" alt="" />
                <p>Sign Up With Google</p>
              </button>
              <button
                // onClick={githubSignUP}
                className="btn flex justify-between items-center"
              >
                <img className="w-7" src="github.png" alt="" />
                <p>Sign Up With Github</p>
              </button>
            </div>
          </div>
          {/* <ToastContainer /> */}
        </div>
      </div>
    );
};

export default Login;