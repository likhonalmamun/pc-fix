import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/ServiceCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    document.title = "PCFIX | SERVICES";
    fetch("http://localhost:5000/allServices")
      .then((res) => res.json())
      .then((data) => setAllServices(data.allServices));
  }, []);
  return (
    <div className="mb-20">
      <h1 className="text-4xl font-bold my-11 pl-4 text-blue-500">
        All Services
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {allServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
