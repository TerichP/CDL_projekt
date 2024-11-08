import MyNav from './MyNav';
import { Container, Grid2 } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductLoad from './ProductLoad';


function MainPage() {
    return (
      <div className="App">
        
        <header>
          <MyNav
            eshop="Keramika">
          </MyNav>
        </header>
        
        <body style={{marginTop: 80}}>
          <ProductLoad/>
        </body>
      </div>
    );
  }
  
  export default MainPage;