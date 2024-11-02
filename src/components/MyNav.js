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
                    <Button color="inherit">Prihlaseni</Button>
                    <Button color="inherit">Oblibene</Button>
                    <Button color="inherit">Kosik</Button>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}