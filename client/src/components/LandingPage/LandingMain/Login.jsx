import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess } from "../../../redux/slice/userSlice";
import jwt from "jwt-decode";

function Login() {
  const [loginWithPassword, setLoginWithPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    dispatch(signInStart());
    const user = await axios.post(
      "http://localhost:9000/api/auth/login",
      formData,
      {
        withCredentials: true,
      }
    );
    dispatch(signInSuccess(user.data));
    navigate("/Home");
  }

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <form>
        <div className="flex flex-col items-center rounded-lg bg-white p-8 w-80 sm:w-96 shadow-lg">
          <h1 className="pb-4 text-xl font-bold">Login</h1>
          <div className="mobile w-full">
            <div className="phoneBox relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-gray-200 w-full p-3 rounded-md placeholder:font-normal font-semibold"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>
          {!loginWithPassword && (
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className=" bg-gray-200 w-full p-3 mt-4 rounded-md placeholder:font-normal font-semibold"
              maxLength={50}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          )}
          {loginWithPassword && (
            <div className="w-full flex flex-col">
              <input
                type="password"
                name="OTP"
                placeholder="Enter OTP"
                autocomplete="otp"
                className="bg-gray-200 w-full p-3 mt-4 rounded-md"
                onInput={(e) => {
                  if (e.target.value.length > 6)
                    e.target.value = e.target.value.slice(0, 6);
                }}
              />
              <Link className="text-xs text-blue-500 mt-2 ml-3 cursor-pointer hover:underline w-max">
                Send OTP
              </Link>
            </div>
          )}
          <Link
            className="text-blue-500 text-xs text-left mt-3 cursor-pointer hover:underline"
            onClick={() => setLoginWithPassword(!loginWithPassword)}
          >
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white rounded p-1 w-full"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link to="/Signup">
            <p
              className=" text-xs text-left cursor-pointer"
              onClick={() => setLoginWithPassword(!loginWithPassword)}
            >
              {`Don't have account? `}
              <span className="text-blue-500 hover:underline">Signup</span>
            </p>
          </Link>

          <div className="flex flex-col w-full h-full">
            <div className="h-0.5 w-full flex items-center justify-center bg-gray-200 mt-5 relative">
              <p className="absolute bg-white px-2 text-sm text-gray-400">or</p>
            </div>
            <div className="flex items-center justify-center mt-5 bg-blue-500 text-white p-2 rounded">
              <button>Login with Google</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
