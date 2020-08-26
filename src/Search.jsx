import React, { useState } from "react";

const Search = ({ allOrders, setFilteredOrders }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const input = e.target.value;
    setFilteredOrders(
      [...allOrders].filter(
        (order) =>
          order.name.includes(input) ||
          order.orderNum.includes(input) ||
          order.deliveryNum.includes(input) ||
          order.mobile.includes(input) ||
          order.email.includes(input) ||
          order.date.includes(input) ||
          order.status.includes(input)
      )
    );
  };

  return (
    <input
      placeholder="חיפוש"
      className="search"
      value={search}
      onChange={handleSearch}
    />
  );
};

export default Search;
