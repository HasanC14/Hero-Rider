import React, { useEffect, useState } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";
import swal from "sweetalert";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5000/Users?currentPage=${currentPage}`
      );
      const data = await response.json();
      setUsers(data.users);
      setTotalPages(data.totalPages);
    };
    fetchData();
  }, [currentPage]);

  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const HandleDelete = (id) => {
    swal({
      title: "Are you sure you want to delete the User?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              swal({
                title: "User Deleted",
                button: "OK",
              });
              const RemainingUser = users.filter((user) => user._id !== id);
              setUsers(RemainingUser);
              //refetch();
            } else {
              swal({
                title: "Delete Failed",
                text: data.message,
                button: "OK",
              });
            }
          });
      } else {
        swal({
          title: "Delete Canceled",
          button: "OK",
        });
      }
    });
  };

  const handleInputChange = (event) => {
    let input = event.target.value;
    if (input) {
      fetch(`http://localhost:5000/search/${input}`)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
        });
    } else {
      fetch("http://localhost:5000/Users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.users);
        });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="overflow-x-auto">
        <div className="flex md:flex-row flex-col justify-between mb-6">
          <div>
            <p className="md:text-4xl text-2xl font-bold mb-3">
              All Users({users.length})
            </p>
          </div>
          <div className=" flex flex-row">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
              onChange={handleInputChange}
            />
            <button className="btn btn-ghost btn-circle">
              <FaSearch></FaSearch>
            </button>
          </div>
        </div>

        <table className="table w-full ">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Full Name</th>
              <th>User Email</th>
              <th>Mobile Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <th>{user?._id}</th>
                <td>{user?.Full_Name}</td>
                <td>{user?.email}</td>
                <td>{user?.number}</td>
                <td>
                  {user.role === "Admin" ? (
                    <button className="btn " disabled>
                      <FaTrash></FaTrash>
                    </button>
                  ) : (
                    <button
                      className="btn"
                      onClick={() => HandleDelete(user._id)}
                    >
                      <FaTrash></FaTrash>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={handlePrevPageClick}>
              «
            </button>
            <button className="btn btn-primary">{`Page ${currentPage} of ${totalPages}`}</button>
            <button className="btn btn-primary" onClick={handleNextPageClick}>
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
