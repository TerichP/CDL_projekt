import './App.css';
import MyCard from './components/MyCard';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className="App">
      <MyNav eshop="Nazev eshopu"></MyNav>
      <MyCard name="Razer 3k ANC" type="Sluchatka" price="3000" left="3" alt="headphones" path=" ZDE PATH NA OBRAZEK "/>
    </div>
  );
}

export default App;