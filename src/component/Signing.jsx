import React, { useState } from "react";

export default function Signing({ setSign }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (name === "hi@hi" && password === "hi") {
      localStorage.setItem("sign", true);
      setSign(true);
    }
  };
  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <label>שם</label>
      <input
        // type="email"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
      />
      <label>סיסמא</label>
      <input
        type="password"
        className="form-control"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btn btn-primary m-2">
        כנס
      </button>
    </form>
  );
}
