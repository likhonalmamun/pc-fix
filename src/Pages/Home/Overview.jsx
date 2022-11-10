import React from "react";

const Overview = () => {
  return (
    <div className="my-10 shadow-xl border-2 bg-slate-50 border-blue-500 rounded-xl p-7">
      <h1 className="text-3xl mb-4 text-blue-600 text-center font-semibold">
        My Service Overview
      </h1>
      <div className="flex justify-around ">
        <div className="rounded-xl shadow-xl bg-white p-4">
          <h1 className="text-5xl font-bold">1K+</h1>
          <h3 className="text-xl font-semibold pl-2 text-blue-500">Reviews</h3>
        </div>
        <div className="rounded-xl shadow-xl bg-white p-4">
          <h1 className="text-5xl font-bold pl-5">30+</h1>
          <h3 className="text-xl font-semibold text-blue-500">Customer/Day</h3>
        </div>
        <div className="rounded-xl shadow-xl bg-white p-4">
          <h1 className="text-5xl font-bold pl-3">92%</h1>
          <h3 className="text-xl font-semibold pl-2 text-blue-500">
            Success Rate
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Overview;
