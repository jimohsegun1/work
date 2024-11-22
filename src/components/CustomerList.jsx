import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCustomer, updateCustomer, deleteCustomer } from "../store";

const CustomerList = () => {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  const [customerForm, setCustomerForm] = useState({
    name: "",
    email: "",
    img: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [notification, setNotification] = useState("");

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleAddCustomer = () => {
    if (customerForm.name && customerForm.email && customerForm.img) {
      dispatch(addCustomer(customerForm));
      resetForm();
      showNotification("Customer added successfully!");
    }
  };

  const handleEditCustomer = (index) => {
    setEditIndex(index);
    setCustomerForm(customers[index]);
    setFormVisible(true);
  };

  const handleUpdateCustomer = () => {
    if (customerForm.name && customerForm.email && customerForm.img) {
      dispatch(
        updateCustomer({ index: editIndex, updatedCustomer: customerForm })
      );
      resetForm();
      showNotification("Customer updated successfully!");
    }
  };

  const handleDeleteCustomer = (index) => {
    dispatch(deleteCustomer(index));
    showNotification("Customer deleted successfully!");
  };

  const resetForm = () => {
    setCustomerForm({ name: "", email: "", img: "" });
    setEditIndex(null);
    setFormVisible(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 h-auto sm:h-auto lg:h-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Customers List
      </h2>

      {notification && (
        <div className="bg-green-100 border border-green-300 text-green-800 p-3 rounded mb-4 text-sm">
          {notification}
        </div>
      )}

      <button
        onClick={() => setFormVisible(!formVisible)}
        className="bg-purple-700 text-white px-5 py-2 rounded mb-6 hover:bg-purple-400 shadow-md focus:outline-none focus:ring focus:ring-blue-300"
      >
        {formVisible ? "Hide Form" : "Add Customer"}
      </button>

      {/* Customers List */}
      <ul className="space-y-4 overflow-y-auto max-h-80 pr-2">
        {customers.map((customer, index) => (
          <li
            key={index}
            className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-2 lg:space-y-0 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={customer.img}
                alt={customer.name}
                className="w-12 h-12 rounded-full border border-gray-300"
              />
              <div>
                <p className="text-base font-medium text-gray-800">
                  {customer.name}
                </p>
                <p className="text-sm text-gray-500">{customer.email}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                className="text-blue-500 hover:underline font-medium"
                onClick={() => handleEditCustomer(index)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:underline font-medium"
                onClick={() => handleDeleteCustomer(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add/Edit Form */}
      {formVisible && (
        <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {editIndex === null ? "Add Customer" : "Edit Customer"}
          </h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={customerForm.name}
              onChange={(e) =>
                setCustomerForm({ ...customerForm, name: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={customerForm.email}
              onChange={(e) =>
                setCustomerForm({ ...customerForm, email: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={customerForm.img}
              onChange={(e) =>
                setCustomerForm({ ...customerForm, img: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </form>
          <div className="mt-4 flex flex-wrap gap-4">
            {editIndex === null ? (
              <button
                onClick={handleAddCustomer}
                className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 shadow-md"
              >
                Add
              </button>
            ) : (
              <button
                onClick={handleUpdateCustomer}
                className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600 shadow-md"
              >
                Update
              </button>
            )}
            <button
              onClick={resetForm}
              className="bg-gray-500 text-white px-5 py-2 rounded hover:bg-gray-600 shadow-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerList;
