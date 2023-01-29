import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";

const name = 'Your Name';

function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="heading2Xl">{name}</h1>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
