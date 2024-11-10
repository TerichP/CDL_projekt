import MyNav from './MyNav';
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