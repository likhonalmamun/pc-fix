import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
const AddService = () => {
  useEffect(() => {
    // this is for web title
    document.title = "PCFIX | ADD SERVICE";
  }, []);
  const addService = (e) => {
    e.preventDefault();
    const newService = {
      serviceName: e.target.name.value,
      serviceCost: e.target.cost.value,
      serviceImg: e.target.photo.value,
      serviceDescription: e.target.details.value,
      time: Date.now(),
    };
    // post method
    fetch("https://assignment-11-server-two.vercel.app/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((result) => {
        // success toast
        toast.success("New service added successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((er) => console.error(er));
    e.target.reset();
  };
  return (
    <form
      onSubmit={addService}
      action=""
      className="sm:p-10 p-3 pb-14 border-2 shadow-2xl border-blue-300 rounded-xl w-[95%] sm:max-w-[700px] mx-auto"
    >
      <h1 className="text-3xl text-blue-500 font-semibold sm:font-bold mb-5">
        Add new service!
      </h1>

      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Service Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border focus:scale-105 duration-300 shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="new service name"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="cost"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Service Cost
        </label>
        <input
          type="text"
          id="cost"
          name="cost"
          className="bg-gray-50 border focus:scale-105 duration-300 shadow-md border-gray-300 
          text-gray-90
           text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5 "
          placeholder="3000TK"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="photo"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Service Image
        </label>
        <input
          type="text"
          id="photo"
          name="photo"
          className="bg-gray-50 border focus:scale-105 duration-300 shadow-md border-gray-300
           text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="photo URL for new service"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="details"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Service Description
        </label>
        <textarea
          className="bg-gray-50 border focus:scale-105 duration-300 shadow-md border-gray-300
           text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
            w-full p-2.5 "
          name="details"
          id="details"
          rows="10"
          placeholder="service description"
          required
        ></textarea>
      </div>

      <button
        className="w-full shadow-lg hover:scale-105 duration-300 bg-blue-500 py-2 text-white rounded-lg font-bold"
        type="submit"
      >
        Add Service <FaPlus className="h-3 text-white inline"></FaPlus>
      </button>
    </form>
  );
};

export default AddService;
