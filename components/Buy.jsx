import { ethers } from "ethers";
import React from "react";

const Buy = ({ state }) => {
  const buyCoffee = async (e) => {
    e.preventDefault();
    const { contract, provider, signer } = state;
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyCoffee(name, message, amount);
    await transaction.wait();
  };
  return (
    <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-[#171515] font-mono">
      <form onSubmit={buyCoffee} className="flex flex-col gap-6 mt-4 ">
        <label className="text-gray-700 dark:text-gray-200" htmlFor="name">
          Name
        </label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#171515] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          type="text"
          placeholder="Enter your name"
          id="name"
        />
        <label className="text-gray-700 dark:text-gray-200" htmlFor="message">
          Message
        </label>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-[#171515] dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          type="text"
          placeholder="Enter your message"
          id="message"
        />
        <button
          type="submit"
          disabled={!state.contract}
          className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default Buy;
