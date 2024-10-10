import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/ValidationPages/Login";
import Signup from "./Components/ValidationPages/Signup";
import Voice from "./Voicepages/Voice";
import Chatbox from "./Components/AichatBox/Chatbox";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/chatbox" element={<Chatbox />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
