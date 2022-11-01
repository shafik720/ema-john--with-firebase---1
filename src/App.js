
import { Route, Routes } from 'react-router';
import './App.css';
import Cart from './Component/Cart/Cart';
import Error from './Component/Error/Error';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import ShopCart from './Component/ShopCart/ShopCart';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shopcart" element={<ShopCart></ShopCart>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
