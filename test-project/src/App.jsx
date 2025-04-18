import { useNavigate } from "react-router-dom";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Expectations from "./components/Expectations/Expectations";
import Teams from "./components/TeamInfo/Teams";


function ButtonsComp() {
  const navigate = useNavigate();
  return (
    <>
      {/* <EventList events={events} /> */}
      <div className="container">
        <button className="buttons" onClick={() => navigate("/expectations")}>
          "Expectations form Club" designs
        </button>
        <button className="buttons" onClick={() => navigate("/team-info")}>
          "Team page" designs
        </button>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ButtonsComp />} />
        <Route path="/expectations" element={<Expectations />} />
        <Route path="/team-info" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
