import React, { useState, useEffect } from "react";
import getDate from "./common/today";
import { fireStore } from "../firebase/config";
import { collectionName } from "./common/collectionName";

const OrderForm = ({ currentId, setCurrentId }) => {
  const basicValues = {
    createAt: new Date(),
    date: getDate(),
    name: "",
    mobile: "",
    email: "",
    orderNum: "",
    deliveryNum: "",
    status: "",
  };
  const [order, setOrder] = useState(basicValues);

  useEffect(() => {
    if (!currentId) {
      setOrder({ ...basicValues });
    } else {
      fireStore
        .collection(collectionName)
        .doc(currentId)
        .get()
        .then((res) => setOrder(res.data()));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(order);
    setCurrentId("");
  };

  const addOrEdit = (obj) => {
    if (!currentId) {
      fireStore.collection(collectionName).add(obj);
    } else {
      fireStore.collection(collectionName).doc(currentId).set(obj);
    }
    setOrder(basicValues);
    setCurrentId("");
  };

  return (
    <form className="order-form" autoComplete="off" onSubmit={handleFormSubmit}>
      <p className="table-title">פרטי הזמנה</p>
      <input
        required
        type="date"
        placeholder="תאריך"
        name="date"
        value={order.date}
        onChange={handleInputChange}
      />
      <input
        required
        name="name"
        placeholder="שם"
        value={order.name}
        onChange={handleInputChange}
      />
      <input
        required
        type="number"
        name="orderNum"
        placeholder="מספר הזמנה"
        value={order.orderNum}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="deliveryNum"
        placeholder="מספר משלוח"
        value={order.deliveryNum}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="mobile"
        placeholder="טלפון"
        value={order.mobile}
        onChange={handleInputChange}
      />
      <input
        required
        type="email"
        name="email"
        placeholder="מייל"
        value={order.email}
        onChange={handleInputChange}
      />
      <input
        name="status"
        placeholder="סטטוס"
        value={order.status}
        onChange={handleInputChange}
      />
      <input
        type="submit"
        value={!currentId ? "Save" : "Update"}
        className="btn-save"
      />
    </form>
  );
};

export default React.memo(OrderForm);
