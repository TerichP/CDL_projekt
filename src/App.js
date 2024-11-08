import MyCardTemplate from './components/MyCardTemplate';
import MyNav from './components/MyNav';
import { Container, Grid2 } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from './components/Write';
import ProductLoad from './components/ProductLoad';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path ="/"/>
          <Route path ="/write" element={<Write/>}/>
        </Routes>
      </Router>
      
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

export default App;
