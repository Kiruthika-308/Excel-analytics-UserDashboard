// src/pages/UserPage.jsx

import React from 'react';
import { Mail, User, Calendar, Shield } from 'lucide-react';

const UserPage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joined: "January 15, 2024",
    role: "Member",
    profileImage: "https://via.placeholder.com/150",
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 shadow-xl rounded-2xl transition hover:shadow-2xl 
                    border border-gray-200 dark:border-gray-700">
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={user.profileImage}
          alt=""
          className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{user.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 dark:bg-blue-800 dark:text-blue-100 rounded-full font-medium">
            {user.role}
          </span>
        </div>
        <div className="sm:ml-auto">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      {/* Details Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-200">
        <div className="flex items-center gap-3">
          <User className="text-blue-500" />
          <div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Full Name</p>
            <p className="text-base">{user.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-blue-500" />
          <div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Email</p>
            <p className="text-base">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Shield className="text-blue-500" />
          <div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Role</p>
            <p className="text-base">{user.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Calendar className="text-blue-500" />
          <div>
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">Joined On</p>
            <p className="text-base">{user.joined}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
