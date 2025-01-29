import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col text-center  justify-center items-center gap-10">
      <h2 className="text-5xl font-bold pt-16">Opppppsss</h2>
      <p>{error.statusText || error.message}</p>
      {error.status == 404 && (
        <div>
          <h3 className="text-xl font-semibold">Page not found</h3>
          <p>Go back to the home page by clicking Home button</p>
          <Link to="/">
            <button className="px-4 text-white font-semibold rounded-lg py-2 bg-orange-700 my-16">Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
