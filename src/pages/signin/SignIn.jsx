/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import { useContext } from "react";
import registerLottieData from "../../assets/lottie/register.json";
import SocialLogin from "../shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { PiSignInBold } from "react-icons/pi";

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

    signInUser(email, password)
      .then((result) => {
        const user = { email: email };
        axios
          .post("https://job-portal-server-six-sigma.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            toast.success("Logged in Successfully.");
          });
        navigate(from);
        form.reset();
      })
      .catch((error) => {
        toast.warn("Wrong Credentials. Try again.");
      });
  };

  return (
    <div className="hero  min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 mt-20 md:mt-24 px-4 md:px-0 max-w-7xl mx-auto">
      {/* Animation Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Lottie animationData={registerLottieData} className="w-3/4 lg:w-full max-w-md" />
      </div>

      {/* Form Section */}
      <div className="card bg-base-100 w-full max-w-sm lg:w-1/2 shadow-2xl p-6">
        <h1 className="text-center text-3xl font-bold mb-6">Sign in now!</h1>
        <form onSubmit={handleSignIn} className="space-y-4">
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
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p className="text-sm">
                Don't have an account?{" "}
                <Link className="text-blue-900 label-text-alt link link-hover" to="/register">
                  Click here
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Sign in <PiSignInBold /></button>
          </div>
        </form>
        <div className="divider">OR</div>
        <div className="flex justify-center">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
