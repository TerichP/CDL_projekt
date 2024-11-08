import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

function Write() {
    let [inputValue1, setInputValue1] = useState("");
    let [inputValue2, setInputValue2] = useState("");
    let [inputValue3, setInputValue3] = useState("");
    let [inputValue4, setInputValue4] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "shop/products"))
        set(newDocRef, {
            productName: inputValue1,
            productPrice: inputValue2,
            productAlt: inputValue3,
            productImg: inputValue4
        }).then(() => {
            alert("data ulozena")
        }).catch((error) => {
            alert("error: ", error.message);
        })
    }

    return (
        <div>
            <input type="text" value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}/>

            <input type="text" value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}/>
            
            <input type="text" value={inputValue3}
            onChange={(e) => setInputValue3(e.target.value)}/>

            <input type="file" value={inputValue4}
            onChange={(e) => setInputValue4(e.target.value)}/> <br/>

            <button onClick={saveData}>SAVE DATA</button>
        </div>
    )
}

export default Write