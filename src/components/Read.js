import React, { useState, useEffect } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import MyNav from "./MyNav";
import Button from '@mui/material/Button';

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
                <Button variant="contained" onClick={fetchData}>Načíst data</Button>
                        <ul>
                            {productArray.map((item, index) => (
                                <li key={index} style={{marginBottom: 10}}>
                                    <b>Alt text:</b> {item.productAlt} <b>Cena:</b> {item.productPrice} <b>Jméno:</b> {item.productName} <b>Path na img:</b> {item.productImg}
                                </li>
                            ))}
                        </ul>

            </body>
        </div>
    )
}

export default Read