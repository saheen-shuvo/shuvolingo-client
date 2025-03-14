import SocialLogin from "../shared/SocialLogin";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import registerLottieData from "../../assets/lottie/register.json";
import { PiSignInBold } from "react-icons/pi";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { createUser, setLoading, setUser } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo?.value || "";
    const terms = form.terms.checked;

    if (!terms) {
      toast.warn("Please accept our terms and conditions.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (password.length < 6) {
      toast.warn("Password must be at least 6 characters.");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.warn(
        "Password must include at least one uppercase and one lowercase letter."
      );
      return;
    }

    try {
      setLoading(true);

      const result = await createUser(email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: username,
        photoURL: photo,
      });

      setUser({ ...user, displayName: username, photoURL: photo });

      toast.success("Account created successfully!");

      const newUser = { username, email };
      await fetch("https://sportify-zone-server.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      form.reset();
      navigate("/");
    } catch (error) {
      console.error("Error creating account:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPass(!showPass);

  return (
    <div className="hero  min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 mt-20 md:mt-24 px-4 md:px-0 max-w-7xl mx-auto">
      {/* Form Section */}
      <div className="card bg-base-100 w-full max-w-sm lg:w-1/2 shadow-2xl p-6">
        <h1 className="text-center text-2xl font-semibold mb-4">Register Here!</h1>
        <form onSubmit={handleRegister} className="card-body space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="btn btn-xs absolute bottom-[12px] right-2"
              aria-label="Toggle Password Visibility"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" name="terms" className="checkbox" />
              <span className="label-text ml-1">
                Accept our terms and conditions
              </span>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary w-full">Sign up <PiSignInBold /></button>
          </div>
          <div className="divider my-0">OR</div>
          <div className="flex justify-center">
            <SocialLogin />
          </div>
        </form>
        <p className="text-xs text-center mt-4">
          Already have an account?{" "}
          <Link className="underline" to="/signin">
            Sign in.
          </Link>
        </p>
      </div>

      {/* Lottie Animation */}
      <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0">
        <Lottie
          animationData={registerLottieData}
          className="w-3/4 lg:w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Register;
