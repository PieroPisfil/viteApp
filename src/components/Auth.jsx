import { useState } from "react";
import { useForm } from "react-hook-form";
import pb from "../api/pocketbase.config";
import useLogin from "../hooks/auth/useLogin";
import { Navigate } from "react-router-dom";

export default function Auth() {
  // const navigate = useNavigate();
  const { mutate: login, isLoading, isError } = useLogin();
  const [isLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid);
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(data) {
    login(
      { email: data.email, password: data.password },
      { 
        onSuccess: () => { setIsLoggedIn(true); reset();},
        onError: () => { setIsLoggedIn(false); },
      }
    );
  }

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p style={{ color: "red" }}>Invalid Email or Password</p>}
      <h1>Please login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register("email")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </>
  );
}
