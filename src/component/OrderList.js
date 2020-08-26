import React from "react";
import DelBtn from "./DelBtn";
import Mail from "./Mail";

const th = [
  "תאריך",
  "שם",
  "מספר הזמנה",
  "מספר משלוח",
  "אימייל",
  "טלפון",
  "סטטוס",
  "",
];

const OrderList = ({ setCurrentId, allOrders }) => {
  const editOrderDetails = (e, id) => {
    if (!e.target.classList[0]) {
      setCurrentId(id);
    }
  };

  return (
    <div className="order-list">
      <table className="table">
        <thead className="thead">
          <tr>
            {th.map((th) => (
              <th key={th}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody">
          {allOrders.map((order) => (
            <tr
              className="order-line"
              key={order.id}
              onClick={(e) => {
                editOrderDetails(e, order.id);
              }}
            >
              <td>{order.date}</td>
              <td>{order.name}</td>
              <td>{order.orderNum}</td>
              <td>{order.deliveryNum}</td>
              <td>{order.email}</td>
              <td>{order.mobile}</td>
              <td>{order.status}</td>
              <td>
                <DelBtn id={order.id} />
                <Mail order={order} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
