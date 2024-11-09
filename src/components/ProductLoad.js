import React, { useState, useEffect } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { Container, Grid2 } from "@mui/material";
import MyCardTemplate from './MyCardTemplate';

function ProductLoad() {

    let [productArray, setProductArray] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "shop/products");
        const snapshot = await get(dbRef);
        if(snapshot.exists()) {
            setProductArray(Object.values(snapshot.val()));
        } else {
            alert("Momentálně nejsou v nabídce žádné produkty.");
        }
    }

    return (
        <div>
            <Container>
                <Grid2 container spacing={2}>
                    {productArray.map ( (item, index) => (
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                        <MyCardTemplate key={index} 
                                alt={item.productAlt}
                                img={item.productImg}
                                name={item.productName}
                                price={item.productPrice}
                        ></MyCardTemplate>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>

        </div>
    )
}

export default ProductLoad