

import './App.css';
import ClientForm from './ClientForm';
import Login from './Login';
import Dashboard from './Dashboard';
import Navbar from "./Navbar";


function App() {
  return (
    <div className="app">
<Login />
<ClientForm />
<Dashboard />
<Navbar />
    </div>
  );
}

export default App;
