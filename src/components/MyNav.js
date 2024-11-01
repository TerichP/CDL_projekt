import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

export default function MyNav(props) {
    return(
        <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.eshop}
                </Typography>

                <Stack direction="row" spacing={4}>
                    <Button color="inherit">LoginPH</Button>
                    <Button color="inherit">Favourites</Button>
                    <Button color="inherit">Cart</Button>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}