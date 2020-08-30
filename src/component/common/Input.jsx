import React from "react";

const Input = ({ input, onChange }) => {
  return (
    <div className="col-md-4">
      <input
        className={input.className || "form-control"}
        type={input.type || "text"}
        required={input.required}
        name={input.name}
        placeholder={input.holder || ""}
        value={input.value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
