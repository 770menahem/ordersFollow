import React, { useState, useEffect } from "react";
import useFirestore from "../firebase/useFirestore";
import { collectionName } from "./common/collectionName";
import { log } from "../firebase/config";
import OrderList from "./OrderList.jsx";
import OrderForm from "./OrderForm";
import SortBy from "./SortBy";
import Search from "./Search";
import LogoutBtn from "./LogoutBtn";
import Header from "./Header";
import Login from "./Login";

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
          <Login />
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
