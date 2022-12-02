
import './App.css';
import Router from './Routes/Router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <div className="App max-w-[1400px] mx-auto bg-[#C6D6FF]">
      <Router></Router>
      <ToastContainer />
    </div>
  );
}

export default App;
