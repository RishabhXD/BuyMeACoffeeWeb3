import React from "react";

const MemoCard = ({ name, message, timestamp, from }) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-3 bg-white rounded-md shadow-md dark:bg-[#171515]">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-800 dark:text-gray-400">
          {new Date(timestamp * 1000).toLocaleString()}
        </span>
        <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
          {name}
        </span>
      </div>

      <div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {message}
        </p>
      </div>

      <div>
        <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
          <span>{from}</span>
        </div>
      </div>
    </div>
  );
};

export default MemoCard;
