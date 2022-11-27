import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Header from "./component/header";

function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
