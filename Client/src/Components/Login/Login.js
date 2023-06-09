import React, { useContext, useState } from "react";
import swal from "sweetalert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginImg from "../../Assets/Login.png";
import { AuthContext } from "../Context/AuthProvider";
const Login = () => {
  const { Login } = useContext(AuthContext);
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then((data) => {
        navigate(from, { replace: true });
        swal({
          title: `Welcome ${data?.user.displayName}`,
          button: "OK",
        });
        form.reset();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src={LoginImg} className="w-full" alt="Phone_image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={HandleForm}>
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    name="email"
                    required
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>

                <div className="mb-6">
                  Don't have an account,
                  <Link to="/RiderReg" className="text-primary ml-2">
                    Register
                  </Link>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-primary text-white font-medium text-sm  uppercase rounded shadow-md hover:bg-primary-focus hover:shadow-lg focus:bg-primary-focus focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg w-full"
                >
                  Sign in
                </button>
                <p className="text-red-700 text-center text-xl">{error}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
