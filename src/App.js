import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from './components/Write';
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
