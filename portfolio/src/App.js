import React,{ useEffect } from 'react';
import './App.css';
import Header from './components/templates/Header'
import Page from './components/Page';
import ModalBox from './components/templates/ProjectModal'
import { ModalContext } from "./context/modalContext";


function App() {
  return (
  <>
  <ModalContext>
    <Header />
    <Page />
    <ModalBox />
  </ModalContext>
  </>
  )
}

export default App;
