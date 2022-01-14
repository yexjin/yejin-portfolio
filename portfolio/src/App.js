import React, { useEffect, useState }  from 'react';
import './App.css';
import Header from './components/templates/Header'
import Page from './components/Page';
import ModalBox from './components/templates/ProjectModal'
import { ModalContext } from "./context/modalContext";
import CTLoading from './components/organisms/CTLoading'

function App() {
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  
  return loading ? (
    <CTLoading />
  ) : (
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
