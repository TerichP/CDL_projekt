import React from "react";
import { useNavigate } from "react-router-dom"
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

export default function MyNav(props) {
    
    const navigate = useNavigate();
    
    return(
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.eshop}
                </Typography>

                <Stack direction="row" spacing={4}>
                    <Button color="inherit" onClick={ () => navigate("/")}>Hlavní Stránka</Button>
                    <Button color="inherit" onClick={ () => navigate("/write")}>Přidat Produkt</Button>
                    <Button color="inherit" onClick={ () => navigate("/read")}>Odstranit Produkt dodelat</Button>
                    {/* pridat hamburger menu,
                        na desktopu neviditelne,
                        pri zobrazeni hamburgeru schovat kosik, oblib. a prihl.
                    */}
                </Stack>

            </Toolbar>
        </AppBar>
    )
}