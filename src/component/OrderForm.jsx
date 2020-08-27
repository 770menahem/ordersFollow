// import React, { useState, useEffect } from "react";
// import getDate from "./common/today";
// import { fireStore } from "../firebase/config";
// import { collectionName } from "./common/collectionName";

// const OrderForm = ({ currentId, setCurrentId }) => {
//   const basicValues = {
//     createAt: new Date(),
//     date: getDate(),
//     name: "",
//     mobile: "",
//     email: "",
//     orderNum: "",
//     deliveryNum: "",
//     status: "",
//   };
//   const [order, setOrder] = useState(basicValues);

//   useEffect(() => {
//     if (!currentId) {
//       setOrder({ ...basicValues });
//     } else {
//       fireStore
//         .collection(collectionName)
//         .doc(currentId)
//         .get()
//         .then((res) => setOrder(res.data()));
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentId]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setOrder({
//       ...order,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     addOrEdit(order);
//     setCurrentId("");
//   };

//   const addOrEdit = (obj) => {
//     if (!currentId) {
//       fireStore.collection(collectionName).add(obj);
//     } else {
//       fireStore.collection(collectionName).doc(currentId).set(obj);
//     }
//     setOrder(basicValues);
//     setCurrentId("");
//   };

//   return (
//     <form className="order-form" autoComplete="off" onSubmit={handleFormSubmit}>
//       <p className="table-title">פרטי הזמנה</p>
//       <div className="form-group col-md-5">
//         <input
//           className="form-control"
//           required
//           type="date"
//           placeholder="תאריך"
//           name="date"
//           value={order.date}
//           onChange={handleInputChange}
//         />
//         <input
//           className="form-control"
//           required
//           name="name"
//           placeholder="שם"
//           value={order.name}
//           onChange={handleInputChange}
//         />
//         <input
//           className="form-control"
//           required
//           type="number"
//           name="orderNum"
//           placeholder="מספר הזמנה"
//           value={order.orderNum}
//           onChange={handleInputChange}
//         />
//         <input
//           className="form-control"
//           type="number"
//           name="deliveryNum"
//           placeholder="מספר משלוח"
//           value={order.deliveryNum}
//           onChange={handleInputChange}
//         />
//         <input
//           className="form-control"
//           type="number"
//           name="mobile"
//           placeholder="טלפון"
//           value={order.mobile}
//           onChange={handleInputChange}
//         />
//         <input
//           className="form-control"
//           required
//           type="email"
//           name="email"
//           placeholder="מייל"
//           value={order.email}
//           onChange={handleInputChange}
//         />
//         <input
//           className="form-control"
//           name="status"
//           placeholder="סטטוס"
//           value={order.status}
//           onChange={handleInputChange}
//         />
//         <input
//           className="form-control btn-save"
//           type="submit"
//           value={!currentId ? "Save" : "Update"}
//         />
//       </div>
//     </form>
//   );
// };

// export default React.memo(OrderForm);

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
      <div className="container">
        <div className="row form-group">
          <div className="col-md-4">
            <input
              className="form-control"
              required
              name="name"
              placeholder="שם"
              value={order.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              required
              type="number"
              name="orderNum"
              placeholder="מספר הזמנה"
              value={order.orderNum}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              type="number"
              name="deliveryNum"
              placeholder="מספר משלוח"
              value={order.deliveryNum}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-4">
            <input
              className="form-control"
              required
              type="email"
              name="email"
              placeholder="מייל"
              value={order.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              type="number"
              name="mobile"
              placeholder="טלפון"
              value={order.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-4">
            <input
              className="form-control"
              required
              type="date"
              placeholder="תאריך"
              name="date"
              value={order.date}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-6">
            <input
              className="form-control"
              name="status"
              placeholder="סטטוס"
              value={order.status}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="submit"
              value={!currentId ? "Save" : "Update"}
              className="btn form-control btn-primary"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default React.memo(OrderForm);
