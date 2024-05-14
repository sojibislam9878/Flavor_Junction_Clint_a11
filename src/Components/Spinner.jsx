import { Helmet } from "react-helmet";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-92px)]">
      <Helmet>
        <title>Loading</title>
      </Helmet>
      <span className="loading loading-spinner loading-lg text-secondary"></span>
    </div>
    );
};

export default Spinner;