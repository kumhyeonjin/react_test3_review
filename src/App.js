import "./css/App.css";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";

import list from "./pages/productData";

import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  let subName = useLocation().pathname;
  let [data, setData] = useState(list);
  return (
    <div className="App">
      <Header subName={subName} />
      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route path="/Shop" element={<Shop data={data} />}></Route>
        <Route path="/Detail/:id" element={<Detail data={data} />}></Route>
        <Route path="/Blog" element={<>blog</>}></Route>
        <Route path="/Story" element={<>our story</>}></Route>
        <Route path="*" element={<>no pages</>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
