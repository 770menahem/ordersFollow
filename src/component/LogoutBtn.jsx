import React from "react";
import { log } from "../firebase/config";

export default function LogoutBtn(props) {
  const logOutBtn = () => {
    log.signOut().catch((e) => console.log(e.message));
  };

  return (
    <button className="btn btn-primary btn-sm m-1 logout" onClick={logOutBtn}>
      יציאה
    </button>
  );
}
