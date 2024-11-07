import MyCard from './components/MyCard';
import MyNav from './components/MyNav';
import { Container, Grid2 } from '@mui/material';


function App() {
  return (
    <div className="App">
      <header>
        <MyNav
          eshop="Keramika">
        </MyNav>
      </header>
      
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
