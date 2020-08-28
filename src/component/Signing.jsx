import React, { useState, useEffect } from "react";

export default function Signing({ setSign }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("sign")) {
        setSign(true);
      }
    }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    if (name === "h@h" && password === "h") {
      localStorage.setItem("sign", true);
      setSign(true);
    }
  };

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <label>שם</label>
      <input
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
