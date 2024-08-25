import React, { useState, useEffect } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useAuthContext } from "../../hooks/useAuthContext";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editUser, setEditUser] = useState(null);
  const { user } = useAuthContext();

  const fetchUsers = async (query = "") => {
    try {
      const url = `http://localhost:4000/api/manageuser?name=${query}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUsers();
    } else {
      alert("You are not logged in!");
    }
  }, [user]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    fetchUsers(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You are not logged in!");
      return;
    }

    // Remove password field from the update payload
    const { password, ...updateUser } = editUser;

    try {
      const response = await fetch(
        `http://localhost:4000/api/manageuser/${editUser._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(updateUser),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        try {
          const errorData = JSON.parse(text);
          throw new Error(errorData.error || "Failed to update user");
        } catch {
          throw new Error(
            "Failed to update user: Server returned an unexpected response."
          );
        }
      }

      fetchUsers();
      setEditUser(null);
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!user) {
      alert("You are not logged in!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/manageuser/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete user");
      }

      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleEditChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center lg:px-24 md:px-16 sm:px-6 px-4 mt-5">
      {/* Left Side - Search and Display Users */}
      <div className="w-full lg:w-2/3 h-full p-6 bg-black/85 rounded-l-lg overflow-y-auto">
        <h2 className="text-xl text-white font-semibold mb-4">Users</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
          placeholder="Search by user name"
        />
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user._id}
              className="bg-gray-800 p-4 mb-4 rounded-lg text-white relative"
            >
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm">Email: {user.email}</p>
              <p className="text-sm">Role: {user.role ? user.role : "user"}</p>
              <div className="absolute top-2 right-2 flex space-x-2">
                <button onClick={() => setEditUser(user)}>
                  <PencilIcon className="h-5 w-5 text-yellow-400" />
                </button>
                <button onClick={() => handleDelete(user._id)}>
                  <TrashIcon className="h-5 w-5 text-red-600" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No users found.</p>
        )}
      </div>

      {/* Right Side - Edit User Form */}
      <div className="w-full lg:w-1/3 h-full p-6 bg-gray-900 rounded-r-lg">
        {editUser ? (
          <>
            <h2 className="text-xl text-white font-semibold mb-4">
              Update User
            </h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editUser.name}
                  onChange={handleEditChange}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Enter user name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editUser.email}
                  onChange={handleEditChange}
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Enter user email"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded bg-red-600 hover:bg-red-00 text-white font-semibold"
              >
                Update User
              </button>
              <button
                type="button"
                className="w-full py-2 px-4 rounded bg-gray-500 hover:bg-gray-600 text-white font-semibold mt-2"
                onClick={() => setEditUser(null)}
              >
                Cancel
              </button>
            </form>
          </>
        ) : (
          <p className="text-white">Select a user to edit.</p>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
