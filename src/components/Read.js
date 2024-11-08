import React, { useState, useEffect } from "react";
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
            <ul>
                {productArray.map((item, index) => (
                    <li key={index}>
                        {item.productAlt} {item.productPrice} {item.productName} {item.productImg}
                    </li>
                ))}
            </ul>
        </div>
    )
}

    export default Read