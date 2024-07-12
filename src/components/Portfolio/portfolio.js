import React, { useState } from "react";
import './portfolio.css';
//import abrakajumpa from '../../assets/abraicon.png';
//import mythos_fighters from '../../assets/mythos_fighters.jpg';
//import ogre from '../../assets/ogreSwap.png';
import mythos_gif from '../../assets/mythos_fighters.gif';
import abrakajumpa_gif from '../../assets/abrakajumpaEX.gif';
import ogreSwap_gif from '../../assets/ogreSwapEX.gif';
import gta6_gif from '../../assets/GTA6GIF.gif';
import PureData from '../../assets/PureData.png';
// other projects section
import mealsForAll_gif from '../../assets/meals-for-all-gif.gif';


const Portfolio = () => {
  const [activePanel, setActivePanel] = useState('games');

  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksdescription">
        Here is my portfolio of projects I have made or been a part of!<br/>
        Click on any panel to view available demos
      </span>
      <div className="button-group">
        <button onClick={() => setActivePanel('games')}>Game Projects</button>
        <button onClick={() => setActivePanel('websites')}>Other Projects</button>
      </div>
      <div className="workspanels">
        {activePanel === 'games' && (
          <>
            <a href="https://store.steampowered.com/app/2998050/Abrakajumpa/" target="_blank" rel="noreferrer" className="portfolioLink">
              <div className="workspanel">
                {/*<img src={abrakajumpa} alt="Abrakajumpa Icon" className="worksimg" />*/}
                <div className="workspanelheader">
                  <h2>Abrakajumpa</h2>
                  <p className="workspaneldesc">
                    A challenging 2D vertical platformer made in Unity, published on Steam. The twist to this game is that you
                    cannot move in the air so you must think before jumping as there are high consquences for a bad jump.<br/><br/> 
                    This game was made in a group of 6 colleagues, which taught me how to work with others for a long period of time.
                    I worked as the lead game designer, responsible for programming 80% of the game.
                    I also worked as the audio lead and did all of the audio in this game.
                    I gained knowledge on how to make complete games and how to apply digital audio to games.
                  </p>
                  <img src={abrakajumpa_gif} alt="Gameplay GIF" className="mythos-gif" />
                </div>
              </div>
            </a>

            <a href="https://wiwechen.itch.io/mythos-fighter" target="_blank" rel="noreferrer" className="portfolioLink">
              <div className="workspanel">
                {/*<img src={mythos_fighters} alt="Mythos Icon" className="mythos" />*/}
                <div className="workspanelheader">
                  <h2>Mythos Fighters</h2>
                  <p className="workspaneldesc">
                    Mythos Fighters is a Mortal Combat like fighting game with an orthographic camera perspective that was made in Unity.<br/><br/> 
                    I worked with a small group of 5 to make this quick project in less than a month. I was in charge of player controls and the physics as well as
                    the vfx. I gained knowledge on how to work fast and quickly develop a project.
                  </p>
                  <img src={mythos_gif} alt="Gameplay GIF" className="mythos-gif" />
                </div>
              </div>
            </a>

            <a href="https://ardlee.github.io/OgreSwap/" target="_blank" rel="noreferrer" className="portfolioLink">
              <div className="workspanel">
                {/*<img src={ogre} alt="Ogre Icon" className="ogre" />*/}
                <div className="workspanelheader">
                  <h2>Ogre Swap</h2>
                  <p className="workspaneldesc">
                    Ogre Swap is a game I made by myself on JavaScript. Protect the ogre by clicking on objects to swap its position with the ogre.<br/><br/>

                    Programmed using "Crisp Game Lib", a framwork meant for one input games. I learned how to use it in a day in order to make this game.
                    
                  </p>
                  <img src={ogreSwap_gif} alt="Gameplay GIF" className="mythos-gif" />
                </div>
              </div>
            </a>

            <a href="https://ardlee.itch.io/gta6" target="_blank" rel="noreferrer" className="portfolioLink">
              <div className="workspanel">
                <div className="workspanelheader">
                  <h2>GTA6</h2>
                  <p className="workspaneldesc">
                    "GTA6" is a prototype game I worked on making in Unity. It is a GTA like game, hence the name. In this game, drive to the safezone as you are guided by a GPS. Avoid the AI cops or else they will bust you and the game ends.<br/><br/>

                    This game was originally meant for download, but I created a webGL page for it on Itch.io to make it more accessible for showing off. This game has simple AI, driving and car physics, nav mesh, and many more game components that I programmed in.
                    
                  </p>
                  <img src={gta6_gif} alt="Gameplay GIF" className="mythos-gif" />
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=cs795vP9IDk&ab_channel=ArthurLee" target="_blank" rel="noreferrer" className="portfolioLink">
              <div className="workspanel">
                <div className="workspanelheader">
                  <h2>Ball Rolling/ Digital Audio</h2>
                  <p className="workspaneldesc">
                    "Ball Rolling" is a very simple game prototype made on Unity. What's special about it the digital audio done in this project made using PureData and was the applied into the Unity project.<br/><br/>

                    There is no GIF here as this is an audio focused piece, so click to view and listen!
                  </p>
                  <img src={PureData} alt="Gameplay GIF" className="mythos-gif" />
                </div>
              </div>
            </a>
          </>
        )}
        {activePanel === 'websites' && (
          <>
            <a href="https://www.figma.com/design/bF801aLi8q3oSheHyfYrxj/W9-Updated-Figma-Prototype?node-id=0-1" target="_blank" rel="noreferrer" className="portfolioLink">
              <div className="workspanel">
                <div className="workspanelheader">
                  <h2>Meals For All</h2>
                  <p className="workspaneldesc">
                    "Meals For All" is a Figma prototype I worked on that showcases UI/UX skills and programming. This is a prototype meant for a suspended meals app that would help users reserve and order food.
                  </p>
                  <img src={mealsForAll_gif} alt="Gameplay GIF" className="mythos-gif" />
                </div>
              </div>
            </a>
          </>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
