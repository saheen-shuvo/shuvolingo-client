import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in Successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-primary mb-4">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
