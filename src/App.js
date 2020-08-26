import React, { useState, useEffect } from "react";
import OrderList from "./component/OrderList";
import OrderForm from "./component/OrderForm";
import { collectionName } from "./component/common/collectionName";
import useFirestore from "./firebase/useFirestore";
import SortBy from "./component/SortBy";
import "./App.css";
import Search from "./Search";

function App() {
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
        <OrderForm {...{ currentId, setCurrentId }} />
        <div className="sort">
          <Search allOrders={allOrders} setFilteredOrders={setFilteredOrders} />
          <SortBy setOrderBy={setOrderBy} orderBy={orderBy} />
        </div>
        <OrderList
          allOrders={filteredOrders ? filteredOrders : allOrders}
          setCurrentId={setCurrentId}
        />
      </div>
      <div className="footer">
        <p>created by MYL</p>
      </div>
    </div>
  );
}

export default App;
