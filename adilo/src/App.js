import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contactus from "./components/Contactus";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type, display) => {
    setAlert({
      theme: type,
      message: display
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <BrowserRouter>
      <Navbar showAlert={showAlert} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<Home showAlert={showAlert} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route exact path="/login" element={<Login showAlert={showAlert} />} />
        <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
