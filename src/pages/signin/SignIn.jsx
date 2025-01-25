import Lottie from "lottie-react";
import { useContext } from "react";
import registerLottieData from "../../assets/lottie/register.json";
import SocialLogin from "../shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log("Sign in", result.user.email);
        const user = { email: email };
        axios
          .post("https://job-portal-server-six-sigma.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            toast.success("Logged in Successfully.");
          });
        navigate(from);
        form.reset();
      })
      .catch((error) => {
        toast.warn("Wrong Credentials. Try again.");
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className=" mx-auto mt-3 text-5xl font-bold">Sign in now!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="">
                  Dont have an account? <Link className="text-blue-900 label-text-alt link link-hover" to='/register'>click here</Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign in</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="flex justify-center">
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
