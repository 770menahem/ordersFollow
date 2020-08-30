import React from "react";
import { log } from "./../firebase/config";

const Header = ({ setSign, sign }) => {
  const logOut = () => {
    log
      .signOut()
      .then(setSign(false))
      .catch((e) => console.log(e));
  };

  return (
    <div className="header">
      <p>מעקב משלוחים</p>
      {sign && (
        <button className="btn btn-primary btn-sm m-1 logout" onClick={logOut}>
          יציאה
        </button>
      )}
    </div>
  );
};

export default Header;
