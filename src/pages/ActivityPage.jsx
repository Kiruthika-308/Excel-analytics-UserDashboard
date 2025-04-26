// src/pages/UserActivityPage.jsx

import React, { useState } from 'react';
import { Clock, LogIn, LogOut, Edit, UserCheck } from 'lucide-react';

const userActivities = [
  { id: 1, icon: <LogIn className="text-green-500 w-5 h-5" />, description: "Logged in", time: "2 minutes ago" },
  { id: 2, icon: <Edit className="text-yellow-500 w-5 h-5" />, description: "Updated profile", time: "10 minutes ago" },
  { id: 3, icon: <LogOut className="text-red-500 w-5 h-5" />, description: "Logged out", time: "20 minutes ago" },
  { id: 4, icon: <UserCheck className="text-blue-500 w-5 h-5" />, description: "Admin approved account", time: "30 minutes ago" },
];

const ActivityPage = () => {
  const [search, setSearch] = useState("");

  const filteredActivities = userActivities.filter(activity =>
    activity.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">User Activity Log</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search activities..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-white"
      />

      {/* User Activities */}
      <ul className="space-y-4">
        {filteredActivities.map((activity) => (
          <li
            key={activity.id}
            className="flex items-start gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow transition"
          >
            <div className="mt-1">{activity.icon}</div>
            <div className="flex flex-col">
              <span className="text-gray-700 dark:text-gray-200 font-medium">{activity.description}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {activity.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityPage;
