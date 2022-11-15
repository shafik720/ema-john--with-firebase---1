
import { createContext } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Cart from './Component/Cart/Cart';
import Error from './Component/Error/Error';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Shop from './Component/Shop/Shop';
import ShopCart from './Component/ShopCart/ShopCart';


export const DummyContext = createContext('dummy');

function App() {
  let x = 420;
  return (
    <DummyContext.Provider value={x}>
      <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shopcart" element={<RequireAuth><ShopCart></ShopCart></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
    </DummyContext.Provider>
    
  );
}

export default App;
