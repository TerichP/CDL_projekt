import React from 'react';
import MuiCard from '@mui/joy/Card'; // Renaming the imported MUI Card

function MyCard() { // Renaming your custom Card component
    return (
      <MuiCard>
        <p>Hello, MUI Joy!</p>
      </MuiCard>
    );
}

export default MyCard;