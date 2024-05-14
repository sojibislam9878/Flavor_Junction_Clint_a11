
import { Helmet } from 'react-helmet';

const NoData = () => {
    return (
            <div className="bg-red-200 mt-24 w-5/6 mx-auto mb-28 ">
      <Helmet>
        <title>Flavor Junction || No data</title>
      </Helmet>
      <div className="container mx-auto p-4 h-[25rem]  flex items-center justify-center">
        <h1 className="font-bold text-4xl text-center text-red-700">
          This user has not added any data
        </h1>
      </div>
    </div>
    );
};

export default NoData;