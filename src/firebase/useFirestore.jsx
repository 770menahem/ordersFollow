const { useState, useEffect } = require("react");
const { fireStore } = require("../firebase/config");

const SORT_OPTION = {
  name: { column: "name", dir: "asc" },
  orderNum: { column: "orderNum", dir: "asc" },
  deliveryNum: { column: "deliveryNum", dir: "asc" },
  date: { column: "createAt", dir: "desc" },
};

export default function useFirestore(collection, orderBy = "createAt") {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = fireStore
      .collection("order")
      .orderBy(SORT_OPTION[orderBy].column, SORT_OPTION[orderBy].dir)
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        setDocs(document);
      });

    return () => unsub();
  }, [collection, orderBy]);

  return { docs };
}
