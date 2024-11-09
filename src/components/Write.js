import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Grid2 } from "@mui/material";
import MyNav from "./MyNav";

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
            <header>
                <MyNav
                     eshop="Keramika">
                </MyNav>
            </header>
        
            <body style={{marginTop: 80}}>
                
                <Container>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <TextField id="outlined-basic" label="Jméno Produktu" variant="outlined" value={inputValue1}
                                onChange={(e) => setInputValue1(e.target.value)}/>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
                            <TextField id="outlined-basic" label="Cena" variant="outlined" value={inputValue2}
                                onChange={(e) => setInputValue2(e.target.value)}/>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>    
                            <TextField id="outlined-basic" label="Alt Text" variant="outlined" value={inputValue3}
                                onChange={(e) => setInputValue3(e.target.value)}/>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>    
                            <TextField id="outlined-basic" label="Link Na Obrázek" variant="outlined" value={inputValue4}
                                onChange={(e) => setInputValue4(e.target.value)}/>
                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
                            <Button variant="contained" onClick={saveData}>Přidat Produkt</Button>
                        </Grid2>
                    </Grid2>
                </Container>

            </body>
        </div>
    )
}

export default Write
