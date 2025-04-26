// src/pages/ReportsPage.jsx

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ReportsPage = () => {
  // Sample data for bar chart and pie chart
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Users',
        data: [120, 200, 150, 180, 220, 300],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Admin', 'User', 'Guest'],
    datasets: [
      {
        data: [15, 70, 15],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Reports</h1>

      {/* Flex container for side-by-side charts */}
      <div className="flex justify-between space-x-4">
        {/* User Activity Bar Chart */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Active Users Over Time</h2>
          <Bar
            data={barChartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Active Users Per Month',
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return `${context.dataset.label}: ${context.raw} users`;
                    },
                  },
                },
              },
            }}
            height={300} // Set the height of the bar chart
            width={400}  // Set the width of the bar chart
          />
        </div>

        {/* User Role Pie Chart */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">User Role Distribution</h2>
          <Pie
            data={pieChartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Roles of Users in the System',
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return `${context.label}: ${context.raw}%`;
                    },
                  },
                },
              },
            }}
            height={300} // Set the height of the pie chart
            width={400}  // Set the width of the pie chart
          />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
