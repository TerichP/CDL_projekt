import { useState } from 'react';
import './App.css';
import MyCard from './components/MyCard';
import MyNav from './components/MyNav';
import InfiniteScroll from "react-infinite-scroll-component"

function App() {
  const [dataSource, setDataSource] = useState(MyCard)
  return (
    <div className="App">
    {/*  <MyNav 
        eshop="Nazev eshopu">
      </MyNav>

      <MyCard 
        name="Razer 3k ANC" 
        type="Sluchatka" 
        price="3000" 
        left="3" 
        alt="headphones" 
        path=" ZDE PATH NA OBRAZEK " 
      /> */}

      <InfiniteScroll dataLength={dataSource.length}>
        {dataSource.map((item, index)=>{
          return <MyCard
            name = {index+1}
            type = {index+1}
            price = {index+1}
            left = {index+1}
            alt = {index+1}          
          ></MyCard>
        })}


      </InfiniteScroll>
    </div>
  );
}

export default App;