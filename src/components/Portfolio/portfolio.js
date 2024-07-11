import React from "react";
import './portfolio.css';
import abrakajumpa from '../../assets/abraicon.png';
import mythos_fighters from '../../assets/mythos_fighters.jpg';
import ogre from '../../assets/ogreSwap.png'

const Portfolio = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksdescription">Here is my portfolio of projects I have made or been a part of!<br/>
      Click on any panel to view available demos</span>
      <div className="workspanels">
        <a href="https://store.steampowered.com/app/2998050/Abrakajumpa/" target="_blank" rel="noreferrer" className="portfolioLink">
          <div className="workspanel">
          <img src={abrakajumpa} alt="Abrakajumpa Icon" className="worksimg" />
            <div className="workspanelheader"><h2>Abrakajumpa</h2>
            <p className="workspaneldesc">
              A challenging 2D vertical platformer made in Unity, published on Steam. The twist to this game is that you
              cannot move in the air so you must think before jumping as there are high consquences for a bad jump.<br/><br/> 
              This game was made in a group of 6 colleagues, which taught me how to work with others for a long period of time.
              I worked as the lead game designer, responsible for programming 80% of the game.
              I also worked as the audio lead and did all of the audio in this game.
              I gained knowledge on how to make complete games and how to apply digital audio to games.
            </p>
          </div>
          </div>
        </a>

        <a href="https://wiwechen.itch.io/mythos-fighter" target="_blank" rel="noreferrer" className="portfolioLink">
          <div className="workspanel">
          <img src={mythos_fighters} alt="Mythos Icon" className="mythos" />
            <div className="workspanelheader"><h2>Mythos Fighters</h2>
            <p className="workspaneldesc">
              Mythos Fighters is a Mortal Combat like fighting game with an orthographic camera perspective that was made in Unity.<br/><br/> 
              I worked with a small group of 5 to make this quick project in less than a month. I was in charge of player controls and the physics as well as
              the vfx. I gained knowledge on how to work fast and quickly develop a project.
            </p>
          </div>
          </div>
        </a>

        <a href="https://ardlee.github.io/OgreSwap/" target="_blank" rel="noreferrer" className="portfolioLink">
          <div className="workspanel">
          <img src={ogre} alt="Ogre Icon" className="ogre" />
            <div className="workspanelheader"><h2>Ogre Swap</h2>
            <p className="workspaneldesc">
              Ogre Swap is a game I made by myself on JavaScript. Protect the ogre by clicking on objects to swap its position with the ogre.<br/><br/>

              Programmed using "Crisp Game Lib", a framwork meant for one input games. I learned how to use it in a day in order to make this game.
              
            </p>
          </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
