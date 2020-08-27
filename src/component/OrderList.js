import React from "react";
import DelBtn from "./DelBtn";
import Mail from "./Mail";

const OrderList = ({ setCurrentId, allOrders }) => {
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

  const editOrderDetails = (e, id) => {
    if (e.target.classList[0] === "list") {
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
              <td className="list">{order.date}</td>
              <td className="list">{order.name}</td>
              <td className="list">{order.orderNum}</td>
              <td className="list">{order.deliveryNum}</td>
              <td className="list">{order.email}</td>
              <td className="list">{order.mobile}</td>
              <td className="list">{order.status}</td>
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
