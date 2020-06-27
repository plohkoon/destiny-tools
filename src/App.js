import React, { useState } from 'react';
import './App.css';

import Modal from './components/modal'
import OptionListItem from './components/optionListItem';

function App() {

  let valuesArray = [
    {
      name: 'D2 Chalice',
      url: 'https://www.d2chalice.com',
      image: false
    },
    {
      name: 'The Vault',
      url: 'https://the-vault.netlify.app/',
      image: false
    },
    {
      name: 'Leviathan Underbelly',
      url: `${process.env.PUBLIC_URL}/img/leviMap.jpg`,
      image: true
    },
    {
      name: 'Prophecy Loot',
      url: `${process.env.PUBLIC_URL}/img/prophecyLoot.png`,
      image: true
    },
    {
      name: 'Riven Eyes',
      url: `${process.env.PUBLIC_URL}/img/rivenEyes.png`,
      image: true
    },
    {
      name: 'Last Wish Wishes',
      url: `${process.env.PUBLIC_URL}/img/wishes.png`,
      image: true
    },
    {
      name: 'Scourge Pipes',
      url: `${process.env.PUBLIC_URL}/img/scourgeMap.png`,
      image: true
    },
    {
      name: 'The Harrow Map',
      url: `${process.env.PUBLIC_URL}/img/theHarrow.png`,
      image: true
    },
    {
      name: 'Zero Hour Maze',
      url: `${process.env.PUBLIC_URL}/img/zeroHour.png`,
      image: true
    },
  ]

  let [showModal, setModal] = useState(true)
  let [currentIndex, setCurrentIndex] = useState(0)

  let openModal = index => {
    setCurrentIndex(index)
    setModal(true)
  }

  let closeModal = () => setModal(false)

  return (
    <div className="App">
      {
        valuesArray.map((val, index) => {
          return <OptionListItem name={val.name} openModal={e => openModal(index)} />
        })
      }
      {
        showModal &&
        <Modal src={valuesArray[currentIndex].url} image={valuesArray[currentIndex].image} alt={valuesArray[currentIndex].title} closeModal={closeModal}/>
      }
    </div>
  );
}

export default App;
