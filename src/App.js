import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
import Gameboard from "./components/Gameboard"
import Setup  from './components/Setup';
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const socket = io.connect("http://localhost:3001");


function App() {
 return(
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Setup/>}/>
          <Route path="/game" element = {<Gameboard/>}/>
      </Routes>
    </BrowserRouter>
 )
}

export default App;
