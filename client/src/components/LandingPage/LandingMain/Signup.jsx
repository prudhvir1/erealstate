import { useEffect, useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SignupStatus from "./SignupStatus";
import axios from "axios";

function Signup() {
  const [nextForm, setNextForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(false);

  const userRef = useRef();

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,24}$/;

  const inputStyle = "m-2 bg-gray-200 w-full px-3 py-2 rounded-md";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  async function handleSignup(e) {
    e.preventDefault();
    const { confirmPassword, ...submitData } = formData;
    console.log(formData);
    console.log(submitData);
    await axios
      .post("http://localhost:9000/api/auth/signup", submitData)
      .then((res) => console.log(res.data));
  }

  return (
    <>
      <form>
        <div className="flex flex-col items-center rounded-lg bg-white p-8 w-80  sm:w-96 shadow-lg">
          <div className="w-full flex items-center pb-4 relative justify-center">
            {nextForm && (
              <ArrowBackIosIcon
                fontSize="small"
                className="absolute w-full left-1 cursor-pointer"
                onClick={() => {
                  setNextForm(false);
                }}
              />
            )}
            <h1 className="text-xl font-bold">Signup</h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            {!nextForm && (
              <>
                <input
                  type="text"
                  name="Name"
                  ref={userRef}
                  placeholder="Name"
                  required
                  className={inputStyle}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  defaultValue={formData.name}
                />
                <input
                  type="number"
                  name="Phone"
                  placeholder="Phone Number"
                  required
                  className={inputStyle}
                  onChange={(e) => {
                    if (e.target.value.length > 10)
                      e.target.value = e.target.value.slice(0, 10);
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                  defaultValue={formData.phone}
                />

                <select
                  name="Role"
                  required
                  className={inputStyle}
                  onChange={(e) => {
                    setFormData({ ...formData, role: e.target.value });
                  }}
                  defaultValue={formData.role}
                >
                  <option value="">Choose Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Plot-Owner">Plot-Owner</option>
                  <option value="Agent">Agent</option>
                  <option value="User">User</option>
                </select>
                <button
                  type="submit"
                  className="mt-5 bg-blue-500 text-white rounded p-1 w-full"
                  onClick={() => setNextForm(true)}
                >
                  Next
                </button>
              </>
            )}

            {nextForm && (
              <>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  required
                  className={inputStyle}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  defaultValue={formData.email}
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  className={inputStyle}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  defaultValue={formData.password}
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Confirm Password"
                  required
                  className={inputStyle}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    });
                  }}
                  defaultValue={formData.confirmPassword}
                />
                <button
                  type="submit"
                  className="mt-5 bg-blue-500 text-white rounded p-1 w-full"
                  onClick={handleSignup}
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
