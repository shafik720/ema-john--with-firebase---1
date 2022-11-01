
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        {/* <Route path="*" element={}></Route> */}
      </Routes>
      <Shop></Shop>
    </div>
  );
}

export default App;
