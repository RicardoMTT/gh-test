import { useAuth } from "../context/providers/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { signinn, isLoading, errorMessage } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userSignin = await signinn({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });
      console.log(userSignin);
      if (userSignin) {
        console.log("entro");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("submit");
  };
  return (
    <div>
      <button onClick={handleSubmit}>Login page</button>
    </div>
  );
};
