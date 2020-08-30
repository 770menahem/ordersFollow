import React, { useState } from "react";

export default function SortBy({ allOrders, setAllOrders }) {
  const [sort, setSort] = useState("date");

  const sortAll = (e) => {
    const field = e.target.value;
    setSort(field);
    const sorted = [...allOrders].sort((a, b) =>
      a[field] > b[field] ? -1 : 1
    );

    setAllOrders(sorted);
  };

  return (
    <div className="mx-2">
      <select className="form-control" value={sort} onChange={sortAll}>
        <option value="date">תאריך</option>
        <option value="createAt">התוסף</option>
        <option value="name">שם</option>
        <option value="orderNum">מספר הזמנה</option>
        <option value="deliveryNum">מספר משלוח</option>
      </select>
    </div>
  );
}
