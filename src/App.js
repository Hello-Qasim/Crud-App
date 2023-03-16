import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Read />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </>
  );
}

export default App;
