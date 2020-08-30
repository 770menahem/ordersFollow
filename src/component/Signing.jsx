import React, { useState } from "react";
import { log } from "../firebase/config";

export default function Signing() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    log.signInWithEmailAndPassword(user.email, user.password).catch((e) => {
      console.log(e.message);
      setError("שם משתמש או סיסמא לא נכונים");
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    setError(null);
  };

  return (
    <form className=" singing" onSubmit={handleSubmit}>
      <label>שם</label>
      <input
        className="form-control col-sm-6 m-auto"
        type="email"
        name="email"
        required
        onChange={handleInputChange}
      />
      <label>סיסמא</label>
      <input
        className="form-control col-sm-6 m-auto"
        name="password"
        type="password"
        required
        onChange={handleInputChange}
      />
      {error && <p>{error}</p>}
      <button type="submit" className="btn btn-primary m-2">
        כנס
      </button>
    </form>
  );
}
