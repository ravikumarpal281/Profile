import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import MainInfoPage from "./components/MainInfoPage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <MainInfoPage></MainInfoPage>
    </>
  );
}

export default App;
