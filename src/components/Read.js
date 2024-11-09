import React, { useState, useEffect } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import MyNav from "./MyNav";

function Read() {

    let [productArray, setProductArray] = useState([]);

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "shop/products");
        const snapshot = await get(dbRef);
        if(snapshot.exists()) {
            setProductArray(Object.values(snapshot.val()));
        } else {
            alert("Žádné data k načtení");
        }
    }

    return (
        <div>
            <header>
                <MyNav
                    eshop="Keramika">
                </MyNav>
            </header>

            <body style={{marginTop: 80}}>
                <button onClick={fetchData}>DISPLAY DATA</button>
                        <ul>
                            {productArray.map((item, index) => (
                                <li key={index} style={{marginBottom: 10}}>
                                    Alt text: {item.productAlt} 
                                    Cena: {item.productPrice} 
                                    Jméno: {item.productName} 
                                    Path na img: {item.productImg}
                                </li>
                            ))}
                        </ul>

            </body>
        </div>
    )
}

export default Read

