import React from "react";

export default function SortBy({ setOrderBy, orderBy }) {
  const handleSelect = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <select value={orderBy} onChange={handleSelect}>
      <option value="date">תאריך</option>
      <option value="name">שם</option>
      <option value="orderNum">מספר הזמנה</option>
      <option value="deliveryNum">מספר משלוח</option>
    </select>
  );
}
