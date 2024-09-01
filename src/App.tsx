import "./App.css";
import Home from "./pages/Home/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const router = (
  <Router>
    <Routes>
      <Route />
    </Routes>
  </Router>
);

console.log(router);

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
