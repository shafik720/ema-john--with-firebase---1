
import { Route, Routes } from 'react-router';
import './App.css';
import Cart from './Component/Cart/Cart';
import Error from './Component/Error/Error';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Cart></Cart>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
