import SocialLogin from "../shared/SocialLogin";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/AuthContext/AuthContext";

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
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
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
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox"
                />
                <span className="label-text ml-1">
                  Accept our terms and conditions
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
            <div className="divider">OR</div>
            <div className="flex justify-center">
              <SocialLogin />
            </div>
          </form>
          <p className="text-xs text-center mb-7">
            Already have an account?{" "}
            <Link className="underline" to="/signin">
              Sign in.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
