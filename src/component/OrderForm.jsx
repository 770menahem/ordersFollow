import React, { useState, useEffect } from "react";
import getDate from "./common/today";
import { fireStore } from "../firebase/config";
import { collectionName } from "./common/collectionName";
import Status from "./Status";
import Input from "./common/Input";

const OrderForm = ({ currentId, setCurrentId, allOrders }) => {
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
  const inputsGroupOne = [
    { value: order.name, holder: "שם", name: "name", required: true },
    {
      value: order.orderNum,
      holder: "מספר הזמנה",
      name: "orderNum",
      type: "number",
      required: true,
    },
    {
      value: order.deliveryNum,
      holder: "מספר משלוח",
      name: "deliveryNum",
      type: "number",
    },
  ];
  const inputsGroupTwo = [
    { value: order.email, holder: "אמייל", name: "email", type: "email" },
    { value: order.mobile, holder: "טלפון", name: "mobile", type: "number" },
    {
      value: order.date,
      holder: "תאריך",
      name: "date",
      type: "date",
      required: true,
    },
  ];
  const submit = {
    type: "submit",
    className: "btn form-control btn-primary",
    //                  false      true
    value: !currentId ? "שמור" : "עדכן",
  };

  useEffect(() => {
    if (!currentId) {
      setOrder({ ...basicValues });
    } else {
      allOrders.forEach((ord) => {
        if (ord.id === currentId) {
          setOrder(ord);
        }
      });
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
      <p className="form-title">פרטי הזמנה</p>
      <div className="container">
        <div className="row form-group">
          {inputsGroupOne.map((input) => (
            <Input
              key={input.name}
              input={input}
              onChange={handleInputChange}
            />
          ))}
        </div>
        <div className="row form-group">
          {inputsGroupTwo.map((input) => (
            <Input
              key={input.name}
              input={input}
              onChange={handleInputChange}
            />
          ))}
        </div>
        <div className="row form-group">
          <div className="col-md-6">
            <Status
              status={order.status}
              handleInputChange={handleInputChange}
            />
          </div>
          <Input input={submit} />
        </div>
      </div>
    </form>
  );
};

export default React.memo(OrderForm);
