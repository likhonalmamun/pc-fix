import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);
  return (
    <div className="mb-20">
      <h1 className="text-4xl font-bold my-11 pl-4 text-blue-500">
        Popular services
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link
        to="/services"
        className="mt-12 border w-fit hover:border-blue-500 py-2 px-7 font-bold bg-blue-500 duration-200 hover:bg-white hover:text-blue-500 text-white mx-auto block rounded-md hover:scale-105"
      >
        See All Services
      </Link>
    </div>
  );
};

export default Services;
