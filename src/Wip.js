import { useState } from 'react';
import './App.css';
import MyCard from './components/MyCard';
import MyNav from './components/MyNav';
import InfiniteScroll from "react-infinite-scroll-component";
import placeholderImage from "./components/ph.JPG"; // Importing the placeholder image

function App() {
 /* const [dataSource, setDataSource] = useState([
    { name: "Razer 3k ANC", type: "Sluchatka", price: "3000", left: "3", alt: "headphones", path: placeholderImage }
  ]);
  const [hasMore, setHasMore] = useState(true); // Track if there are more items to load

  const fetchMoreData = () => {
    setTimeout(() => {
      if (dataSource.length >= 20) {
        setHasMore(false);
        return;
      }

      const newItems = [
        { name: "Item " + (dataSource.length + 1), type: "Example", price: "2000", left: "5", alt: "item", path: placeholderImage }
      ];
      setDataSource(prevDataSource => prevDataSource.concat(newItems));
    }, 500);
  };
  */

  const [dataSource, setDataSource] = useState(Array.from({length:20}))
  const [hasMore, setHasMore] = useState(true)
  const fetchMoreData=()=>{
    //API call zde
    setTimeout(() => {
      setDataSource(dataSource.concat(Array.from({length:20})))
    }, 500);
  }
  
  return (
    <div className="App">
      <InfiniteScroll dataLength={dataSource.length} next={fetchMoreData} hasMore={hasMore}>
        {dataSource.map((item,index) =>{
          return <div key={index}>Div cislo {index+1}</div>
        })}
      </InfiniteScroll>

      {/*<MyNav eshop= 'Nazev Eshopu'></MyNav>

      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
      >
        {dataSource.map((item, index) => (
          <MyCard key={index} />
        ))}
      </InfiniteScroll> */}
    </div>
  );
}

export default App;
