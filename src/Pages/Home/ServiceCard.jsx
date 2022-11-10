import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const ServiceCard = ({ service }) => {
  const { _id, serviceName, serviceDescription, serviceImg, serviceCost } =
    service;
  return (
    <div className="w-full  bg-white rounded-lg shadow-xl border border-blue-400">
      <PhotoProvider>
        {/* this section is for viewing  full screen photo  */}
        <PhotoView src={serviceImg}>
          <img
            className="sm:p-5 p-2 w-full rounded-lg h-[260px] rounded-t-lg"
            src={serviceImg}
            alt=""
          />
        </PhotoView>
      </PhotoProvider>
      <div className="sm:px-5 px-2 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
          {serviceName}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <span
            className="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded
          "
          >
            {serviceDescription.length > 100
              ? serviceDescription.slice(0, 99) + "..."
              : serviceDescription}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-yellow-400 ">
            {serviceCost} <span className="text-gray-500">BDT</span>
          </span>
          <Link
            to={`/services/${_id}`}
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg  px-5 py-2 text-center "
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
