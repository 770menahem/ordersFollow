import React, { useState, useEffect } from "react";
import useFirestore from "./firebase/useFirestore";
import { collectionName } from "./component/common/collectionName";
import { log } from "./firebase/config";
import Signing from "./component/Signing";
import OrderList from "./component/OrderList.jsx";
import OrderForm from "./component/OrderForm";
import SortBy from "./component/SortBy";
import Search from "./component/Search";
import Header from "./component/Header";
import LogoutBtn from "./component/LogoutBtn";
import "./Home.css";

function Home() {
  const { docs } = useFirestore(collectionName);
  const [sign, setSign] = useState(false);
  const [currentId, setCurrentId] = useState("");
  const [allOrders, setAllOrders] = useState(docs);
  const [filteredOrders, setFilteredOrders] = useState("");

  useEffect(() => {
    setAllOrders(docs);
  }, [docs]);

  useEffect(() => {
    log.onAuthStateChanged((user) => {
      if (user) {
        setSign(true);
      } else {
        setSign(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Header {...{ sign, setSign }} />
      <div className="section">
        {!sign ? (
          <Signing />
        ) : (
          <>
            <LogoutBtn />
            <OrderForm {...{ currentId, setCurrentId, allOrders }} />
            <div className="sort">
              <Search {...{ allOrders, setFilteredOrders }} />
              <SortBy {...{ allOrders, setAllOrders }} />
            </div>
            <OrderList
              {...{
                setCurrentId,
                allOrders: filteredOrders ? filteredOrders : allOrders,
              }}
            />
          </>
        )}
      </div>
      <div className="footer">
        <p>created by MYL</p>
      </div>
    </div>
  );
}

export default Home;
