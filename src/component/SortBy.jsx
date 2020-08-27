// import React from "react";

// export default function SortBy({ setOrderBy, orderBy }) {
//   const handleSelect = (e) => {
//     setOrderBy(e.target.value);
//   };

//   return (
//     <select value={orderBy} onChange={handleSelect}>
//       <option value="createAt">התווסף</option>
//       <option value="date">תאריך</option>
//       <option value="name">שם</option>
//       <option value="orderNum">מספר הזמנה</option>
//       <option value="deliveryNum">מספר משלוח</option>
//     </select>
//   );
// }

import React from "react";

export default function SortBy({ setOrderBy, orderBy }) {
  const handleSelect = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div className="container">
      <div className="row form-group">
        <div className="col-md-6">
          <select
            className="form-control"
            value={orderBy}
            onChange={handleSelect}
          >
            <option value="date">תאריך</option>
            <option value="name">שם</option>
            <option value="orderNum">מספר הזמנה</option>
            <option value="deliveryNum">מספר משלוח</option>
          </select>
        </div>
      </div>
    </div>
  );
}
