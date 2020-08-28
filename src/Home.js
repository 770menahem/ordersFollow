import React, { useState, useEffect } from "react";
import useFirestore from "./firebase/useFirestore";
import { collectionName } from "./component/common/collectionName";
import Signing from "./component/Signing";
import OrderList from "./component/OrderList.jsx";
import OrderForm from "./component/OrderForm";
import SortBy from "./component/SortBy";
import Search from "./component/Search";
import "./Home.css";

function Home() {
  const [sign, setSign] = useState(false);
  const [orderBy, setOrderBy] = useState("date");
  const { docs } = useFirestore(collectionName, orderBy);
  const [currentId, setCurrentId] = useState("");
  const [allOrders, setAllOrders] = useState(docs);
  const [filteredOrders, setFilteredOrders] = useState("");

  useEffect(() => {
    setAllOrders(docs);
  }, [docs, orderBy]);

  return (
    <div className="App">
      <div className="header">
        <p>מעקב משלוחים</p>
      </div>
      <div className="section">
        {!sign ? (
          <Signing setSign={setSign} />
        ) : (
          <>
            <OrderForm {...{ currentId, setCurrentId, allOrders }} />
            <div className="sort">
              <Search
                allOrders={allOrders}
                setFilteredOrders={setFilteredOrders}
              />
              <SortBy setOrderBy={setOrderBy} orderBy={orderBy} />
            </div>
            <OrderList
              allOrders={filteredOrders ? filteredOrders : allOrders}
              setCurrentId={setCurrentId}
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
