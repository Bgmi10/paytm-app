'use client';
import React from 'react';

export const Index = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <span className="font-extrabold text-4xl text-gray-800">Transfers</span>
      </div>

      <div className="flex justify-center mt-8">
        <div className="w-96 h-auto rounded-lg border border-gray-300 shadow-lg p-6 bg-white">
          <div className="text-center">
            <span className="font-semibold text-lg text-gray-700">Receiver</span>
          </div>

          <div className="mt-8">
            <label className="font-medium text-gray-600 block mb-2">Amount</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition duration-150 ease-in-out"
              placeholder="Enter amount"
            />
          </div>

          <div className="mt-6">
            <label className="font-medium text-gray-600 block mb-2">Bank</label>
            <select
              className="w-full border border-gray-300 bg-gray-50 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer transition duration-150 ease-in-out"
            >
              <option>HDFC Bank</option>
              <option>AXIS Bank</option>
            </select>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out">
              Add Money
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
