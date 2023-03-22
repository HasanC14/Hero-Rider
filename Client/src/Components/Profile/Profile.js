import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../Loading/Loading";

const Profile = () => {
  const { User } = useContext(AuthContext);
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${User?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      });
  }, [loading, User?.email]);

  return (
    <div className=" antialiased">
      <div className="container mx-auto my-60">
        <div>
          <div className="bg-primary relative shadow-xl rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-center">
              <img
                src={User?.photoURL}
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-xl-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>
            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900">
                {User?.displayName}{" "}
                <span className="text-sm">({info?.role})</span>
              </h1>
            </div>
            {loading ? (
              <Loading></Loading>
            ) : (
              <div className="w-full mt-5 grid md:grid-cols-2 grid-cols-1 gap-6">
                <h3 className="text-xl text-gray-900 md:text-left  text-center px-6">
                  Email: {info?.email}
                </h3>
                <h3 className="text-xl text-gray-900 md:text-right text-center  px-6">
                  Mobile Number: {info?.number}
                </h3>
                <h3 className="text-xl text-gray-900 md:text-left  text-center px-6 md:mb-16 mb-0">
                  Age: {info?.age}
                </h3>
                <h3 className="text-xl text-gray-900 md:text-right text-center  px-6">
                  Current Address: {info?.address}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
