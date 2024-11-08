import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

function Read() {

    let [productArray, setProductArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "shop/products");
        const snapshot = await get(dbRef);
        if(snapshot.exists()) {
            setProductArray(Object.values(snapshot.val()));
        } else {
            alert("error");
        }
    }

    return (
        <div>
            <button onClick={fetchData}>DISPLAY DATA</button>
        </div>
    )
}

export default Read