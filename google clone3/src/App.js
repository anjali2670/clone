import './App.css';
import React from 'react'
import Home from "./pages/Home"
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" extact element={<Home />} />
        <Route path="/search" extact element={<SearchPage />}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App