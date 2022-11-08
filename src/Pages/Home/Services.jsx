import React, { useEffect, useState } from "react";
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
    </div>
  );
};

export default Services;
