import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <main>
      <Outlet/>
    </main>
  );
}

export default App;
