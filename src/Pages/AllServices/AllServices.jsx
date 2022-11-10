import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/ServiceCard";

const AllServices = () => {
  const [servicesLoading, setServicesLoading] = useState(true);
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    document.title = "PCFIX | SERVICES";
    // get method for all services
    fetch("https://assignment-11-server-two.vercel.app/allServices")
      .then((res) => res.json())
      .then((data) => {
        setAllServices(data.allServices);
        setServicesLoading(false);
      });
  }, []);
  if (servicesLoading) {
    return (
      <div className="text-3xl p-4 h-[70vh] bg-blue-50 text-blue-700 font-bold text-center">
        <h1 className="mt-[28vh]"><Spinner size='xl' color="failure" aria-label="Center-aligned spinner example" /></h1>
      </div>
    );
  } else {
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
  }
};

export default AllServices;
