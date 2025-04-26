import React from 'react';
import { Users, Activity, CheckCircle, BarChart3 } from 'lucide-react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

const cards = [
  {
    title: 'Users',
    value: '1,248',
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    title: 'Active Sessions',
    value: '87',
    icon: <Activity className="w-6 h-6 text-green-500" />,
  },
  {
    title: 'Tasks Completed',
    value: '342',
    icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
  },
  {
    title: 'Reports Generated',
    value: '29',
    icon: <BarChart3 className="w-6 h-6 text-yellow-500" />,
  },
];

const userData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 600 },
  { name: 'Mar', users: 800 },
  { name: 'Apr', users: 650 },
  { name: 'May', users: 900 },
  { name: 'Jun', users: 750 },
];

const taskData = [
  { name: 'Mon', tasks: 30 },
  { name: 'Tue', tasks: 50 },
  { name: 'Wed', tasks: 80 },
  { name: 'Thu', tasks: 65 },
  { name: 'Fri', tasks: 95 },
];

const OverviewPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-md bg-white dark:bg-gray-700 shadow">{card.icon}</div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{card.title}</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Monthly New Users</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userData}>
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Tasks Completed Per Day</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={taskData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Legend />
              <Bar dataKey="tasks" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
