const { useState, useEffect } = require("react");
const { fireStore } = require("../firebase/config");

export default function useFirestore(collection) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = fireStore.collection("order").onSnapshot((snap) => {
      let document = [];
      snap.forEach((doc) => {
        document.push({ ...doc.data(), id: doc.id });
      });
      setDocs(document);
    });

    return () => unsub();
  }, [collection]);

  return { docs };
}
