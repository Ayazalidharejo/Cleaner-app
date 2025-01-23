import * as React from 'react';

import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // This will center the modal
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal(props) {

  const { open, handleOpen, handleClose } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Logs the form data

    // Close the modal after logging the data
    handleClose();

    // Optionally show a SweetAlert2 notification
    Swal.fire({
        title: "Successfully Submit!",
        html: "<p>Your request is submitted successfully. We will contact you in a while with the quote price. Thanks.</p>",
        icon: "success",
      });
      
  };

  const handleModalClick = (event) => {
    // Prevent the modal from closing when clicking inside the modal content area
    event.stopPropagation();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Modal content */}
        <div
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg max-h-[80vh] overflow-y-auto z-50"
          onClick={handleModalClick} // Prevents closing when clicking inside modal
          style={style} // Use the style to center the modal
        >
          <h2 className="text-xl font-bold mb-4 text-center">Office Cleaning</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                  className={`w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium">Location</label>
                <input
                  type="text"
                  {...register("location", { required: "Location is required" })}
                  className={`w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300 ${
                    errors.location ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                )}
              </div>

              {/* City Zip */}
              <div>
                <label className="block text-sm font-medium">City Zip</label>
                <input
                  type="text"
                  {...register("zip", {
                    required: "City zip is required",
                    pattern: {
                      value: /^\d{5}$/,
                      message: "Zip code must be 5 digits",
                    },
                  })}
                  className={`w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300 ${
                    errors.zip ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>
                )}
              </div>

              {/* Area */}
              <div>
                <label className="block text-sm font-medium">Area (in sq ft)</label>
                <input
                  type="number"
                  {...register("area", { required: "Area is required" })}
                  className={`w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300 ${
                    errors.area ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.area && (
                  <p className="text-red-500 text-sm mt-1">{errors.area.message}</p>
                )}
              </div>

              {/* Date/Time */}
              <div>
                <label className="block text-sm font-medium">Date/Time</label>
                <input
                  type="datetime-local"
                  {...register("dateTime", { required: "Date and time are required" })}
                  className={`w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300 ${
                    errors.dateTime ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.dateTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.dateTime.message}</p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium">Service Type</label>
                <div className="flex flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      {...register("serviceType.room")}
                      className="form-checkbox h-5 w-5 text-green-600"
                    />
                    <span className="ml-2">Room Cleaning</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      {...register("serviceType.windows")}
                      className="form-checkbox h-5 w-5 text-green-600"
                    />
                    <span className="ml-2">Windows Cleaning</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      {...register("serviceType.cabinets")}
                      className="form-checkbox h-5 w-5 text-green-600"
                    />
                    <span className="ml-2">Cabinets Cleaning</span>
                  </label>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-sm font-medium">Special Requirements</label>
                <textarea
                  {...register("specialRequirements")}
                  className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-green-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default BasicModal;
