import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar.js';
import Container from './components/Container/Container.js';
import Popup from './components/Popup/Popup';

function App() {

  const [data, setData] = useState([])
  const [imagepop, setImagepop] = useState(null)

  
  //data in form of list from the unsplash api
  const fetchData = (data) => {
    setData(data)
  }
  //for tracking which image is being selected and then updating the imagepop state
  const selectedImage = (image) => {
    setImagepop(image)
  }

  return (
    <div className="App">
      <div className='app__body'>
        <Searchbar fetchData={ fetchData }/>
        <Container images={ data }  selectedImage={ selectedImage }/>
        {imagepop &&  <Popup imagepop={ imagepop } selectedImage={ selectedImage }/>}
      </div>
    </div>
  );
}

export default App;
