import React, { useState } from 'react';
import './styles/App.scss';

import Content from './components/content'
import OptionListItem from './components/optionListItem';
import Header from './components/header';

function App() {

  let valuesArray = [
    {
      name: 'Xurios',
      url: 'https://wherethefuckisxur.com/',
      image: false,
    },
    {
      name: 'DSC Sparrow Cliffs',
      url: `${process.env.PUBLIC_URL}/img/dsc-sparrow-map.png`,
      image: true
    },
    {
      name: 'The Vault',
      url: 'https://the-vault.netlify.app/',
      image: false
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
      name: 'The Harrow Map',
      url: `${process.env.PUBLIC_URL}/img/theHarrow.png`,
      image: true
    },
  ]
    
  let archiveArray = [
    {
      name: 'Zero Hour Maze',
      url: `${process.env.PUBLIC_URL}/img/zeroHour.png`,
      image: true
    },
    {
      name: 'Scourge Pipes',
      url: `${process.env.PUBLIC_URL}/img/scourgeMap.png`,
      image: true
    },  
    {
      name: 'Leviathan Underbelly',
      url: `${process.env.PUBLIC_URL}/img/leviMap.jpg`,
      image: true
    },
    {
      name: 'D2 Chalice',
      url: 'https://www.d2chalice.com',
      image: false
    },
  ]

  let [currentIndex, setCurrentIndex] = useState(0)
  let [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ul className={`tabOptions${menuOpen ? ' active': ''}`}>
        {
          valuesArray.map((val, index) => {
            return  <OptionListItem
                      key={val.name}
                      name={val.name}
                      selectContent={e => {
                        setCurrentIndex(index)
                        setMenuOpen(false)
                      }}
                      active={index===currentIndex}
                    />
          })
        }
      </ul>
      <Content src={valuesArray[currentIndex].url} image={valuesArray[currentIndex].image} alt={valuesArray[currentIndex].title} />
    </div>
  );
}

export default App;
