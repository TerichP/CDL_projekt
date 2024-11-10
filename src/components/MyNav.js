import React from "react";
import { useNavigate } from "react-router-dom"
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import RwbMenu from './RwbMenu'

export default function MyNav(props) {
    
    const navigate = useNavigate();
    
    return(
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.eshop}
                </Typography>

                <Stack direction="row" spacing={4}>
                    <Button sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} color="inherit" onClick={ () => navigate("/")}>Hlavní Stránka</Button>
                    <Button sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} color="inherit" onClick={ () => navigate("/write")}>Přidat Produkt</Button>
                    <Button sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} color="inherit" onClick={ () => navigate("/read")}>Data</Button>
                    
                    <RwbMenu></RwbMenu>
                 
                </Stack>

            </Toolbar>
        </AppBar>
    )
}