import React, { useState } from "react";

export default function Mail({ order }) {
  const basicMail = `
  שלום ${order.name}!
  ההזמה יצאה למשלוח
  מספר הזמנה: ${order.orderNum}
  מספר משלוח: ${order.deliveryNum}
  `;
  const [mail, setMail] = useState(false);
  const [txtMail, setTxtMail] = useState(basicMail);

  const showMail = () => {
    setMail(true);
  };

  const sendMail = () => {
    console.log(txtMail);
    setMail(false);
    setTxtMail(basicMail);
  };

  const closeEmailPopup = (e) => {
    if (e.target.classList.contains("mail-popup")) setMail(false);
  };

  const handleMailMessage = (e) => {
    setTxtMail(e.target.value);
  };

  return (
    <>
      <button className="btn-send" onClick={showMail}>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-envelope"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
          />
        </svg>
      </button>
      {mail && (
        <div className="mail-popup" onClick={closeEmailPopup}>
          <div className="mail">
            <textarea defaultValue={txtMail} onChange={handleMailMessage} />
            <button onClick={sendMail}>send</button>
          </div>
        </div>
      )}
    </>
  );
}
