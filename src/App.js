import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import './css/style.css';
import './css/style.min.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Login/>
        <Signup/>
    </div>
  );
}

export default App;
