import './App.css';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/Order';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Order />} />
      </Routes>
    </>
  );
};

export default App;
