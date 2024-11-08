import MyCard from './components/MyCard';
import MyNav from './components/MyNav';
import { Container, Grid2 } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from './components/Write';
import Read from './components/Read';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path ="/"/>
          <Route path ="/write" element={<Write/>}/>
          <Route path ="/read" element={<Read/>}/>
        </Routes>
      </Router>
      
      {/*
      <header>
        <MyNav
          eshop="Keramika">
        </MyNav>
      </header>
      */}
      <body style={{marginTop: 80}}>
        <Container>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
             <MyCard></MyCard>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
             <MyCard></MyCard>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
             <MyCard></MyCard>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
             <MyCard></MyCard>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
             <MyCard></MyCard>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
             <MyCard></MyCard>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
             <MyCard></MyCard>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
             <MyCard></MyCard>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
             <MyCard></MyCard>
            </Grid2>
            
          </Grid2>
        </Container>
      </body>
    </div>
  );
}

export default App;
