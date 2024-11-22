import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  customers: [
    { name: "Ana Black", email: "ana@gmail.com", img: "images/cust1.png" },
    { name: "George Liu", email: "georgeliu@gmail.com", img: "images/cust2.png" },
    { name: "John Miller", email: "johnmiller@gmail.com", img: "images/cust3.png" },
    { name: "Jane Johnson", email: "jj@gmail.com", img: "images/cust4.png" },
    { name: "Mezei Agnes", email: "fefekartika@gmail.com", img: "images/cust5.png" },
    { name: "Katona Beatrix", email: "edobram@gmail.com", img: "images/cust6.png" },
    { name: "Halasz Emese", email: "jiloputri@yahoo.com", img: "images/cust7.png" },
  ],
};

// Create a Redux slice
const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const { index, updatedCustomer } = action.payload;
      state.customers[index] = updatedCustomer;
    },
    deleteCustomer: (state, action) => {
      const index = action.payload;
      state.customers.splice(index, 1);
    },
  },
});

// Export actions
export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;

// Create and export the Redux store
export const store = configureStore({
  reducer: {
    customers: customerSlice.reducer,
  },
});
