import MyCardTemplate from './components/MyCardTemplate';
import MyNav from './components/MyNav';
import { Container, Grid2 } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from './components/Write';
import ProductLoad from './components/ProductLoad';
import Read from './components/Read';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path ="/" element={<MainPage/>}/>
          <Route path ="/write" element={<Write/>}/>
          <Route path ="/read" element={<Read/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
