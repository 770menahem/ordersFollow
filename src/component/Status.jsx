import React from "react";

const selsct = ["חדש", "עריכה", "הדפסה", "אריזה", "משלוח", "יצא למשלוח", "אחר"];

function Status({ status, handleInputChange }) {
  return (
    <select
      className="form-control"
      name="status"
      value={status}
      onChange={handleInputChange}
    >
      {selsct.map((s, i) => (
        <option key={i} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}

export default Status;
