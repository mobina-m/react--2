import React from "react";
const customer = {
  first_name: "Bob",
  last_name: "Dylan",
};
const CustomerInformation = ({ first_name, last_name }) => {
  return (
    <div>
      <h1>MY NAME IS : {customer.first_name}</h1>
      <h2>MY LAST NAME IS :{customer.last_name}</h2>
    </div>
  );
};
export default CustomerInformation;
