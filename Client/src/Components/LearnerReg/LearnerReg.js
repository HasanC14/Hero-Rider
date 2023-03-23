import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import RegisterImg from "../../Assets/register.png";
import { AuthContext } from "../Context/AuthProvider";

const LearnerReg = () => {
  const { Register, UpdateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  //const location = useLocation();
  const [error, setError] = useState();
  //const from = location.state?.from?.pathname || "/";
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const Full_Name = form.Full_Name.value;
    const photoURL = form.photoURL.value;
    const nid_photoURL = form.nid_photoURL.value;
    const email = form.email.value;
    const address = form.address.value;
    const number = form.number.value;
    const age = form.age.value;
    const password = form.password.value;
    const vehicle = form.vehicle.value;
    const role = "Learner";

    const user = {
      Full_Name,
      photoURL,
      nid_photoURL,
      email,
      vehicle,
      role,
      address,
      number,
      age,
    };

    Register(email, password)
      .then(() => {
        fetch("https://hero-rider-server-ashy.vercel.app/addUser", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(() => {
            navigate("/Profile");
            swal({
              icon: "success",
              title: "Sign Up Successful",
              button: "OK",
            });
          });
        form.reset();

        // navigate(from, { replace: true });
        const profile = { displayName: Full_Name, photoURL: photoURL };
        UpdateUser(profile).then(() => {});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="">
        <div className=" md:px-6 md:py-12 p-0 h-full">
          <div className="flex md:flex-row flex-col h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src={RegisterImg} className="w-full" alt="Phone_image" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20 ml-10 mr-10 mb-10">
              <form onSubmit={HandleForm}>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    placeholder="Full Name"
                    name="Full_Name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    placeholder="Age"
                    name="age"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="number"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    placeholder="Mobile number"
                    name="number"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    placeholder="Current Address"
                    name="address"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    placeholder="Photo URL"
                    name="photoURL"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    placeholder="NID Photo URL"
                    name="nid_photoURL"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                    placeholder="Confirm Password"
                    name="confirm_password"
                    required
                  />
                </div>
                <div className="flex justify-start mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary focus:outline-none transition duration-200 mt-2 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="vehicle"
                      id="inlineRadio1"
                      value="Car"
                      required
                    />
                    <label
                      className="form-check-label inline-block text-2xl text-gray-800"
                      htmlFor="inlineRadio10"
                    >
                      Car
                    </label>
                  </div>
                  <div className="form-check form-check-inline ml-3">
                    <input
                      className=" form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary focus:outline-none transition duration-200 mt-2 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="vehicle"
                      id="inlineRadio2"
                      value="Bike"
                      required
                    />
                    <label
                      className="form-check-label inline-block text-2xl text-gray-800"
                      htmlFor="inlineRadio20"
                    >
                      Bike
                    </label>
                  </div>
                </div>
                <div className="mb-6">
                  Already have an account
                  <Link to="/Login" className="text-primary ml-2">
                    Login
                  </Link>
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-primary text-white font-medium text-sm  uppercase rounded shadow-md hover:bg-primary-focus hover:shadow-lg focus:bg-primary-focus focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg w-full"
                >
                  Join as a Learner
                </button>
                <p className="text-red-600 text-center text-xl">{error}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnerReg;
