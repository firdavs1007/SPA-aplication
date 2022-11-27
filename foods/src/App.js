import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Header from "./component/header";
import Main from "./component/main";

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
