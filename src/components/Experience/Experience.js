import React, { useState } from "react";
import './Experience.css';
//import abrakajumpa from '../../assets/abraicon.png';
//import mythos_fighters from '../../assets/mythos_fighters.jpg';
//import ogre from '../../assets/ogreSwap.png';
import memorymelon_jpeg from '../../assets/memorymelon.jpg'



const Experience = () => {
  const [activePanel] = useState('games');

  return (
    <section id="experience">
      <h2 className="workstitle">My Work Experience</h2>
      <span className="worksdescription">
        Here is my current work experience!<br/>
        Click on any panel to view available demos or for more info.
      </span>
  
      <div className="workspanels">
        {activePanel === 'games' && (
          <>
          <a href="https://thirdfloor.games/" target="_blank" rel="noreferrer" className="portfolioLink">
              <div className="workspanel">
                {/*<img src={abrakajumpa} alt="Abrakajumpa Icon" className="worksimg" />*/}
                <div className="workspanelheader">
                  <h2>Mobile Developer at Third Floor Games</h2>
                  <p className="workspaneldesc">
                  As a mobile developer at Third Floor Games I learned how to manage and create a mobile game as well as learning
                  important skills for the market such as integrating systems into the existing mobile game. I used third party systems
                  to integrate an analytics database, this allowed Third Floor Games to view all players' progress as well as seeing which 
                  mode players are playing and how long they are playing, etc. I also was in charge of setting push notifications which
                   allowed us to send players notifications to regain rentention rate by reminding players to play. Lastly I implemented 
                  a leaderboards system using a Unity extention "voxel busters". This allowed us to easily collect all players' scores 
                  and then put them in a combined cross platform leaderboard and used either their google play account or game center account 
                  depending on which device they are playing on.
                  </p>
                </div>
              </div>
            </a>

            <a href="https://itch.io/c/5107990/mission-bit-phillip-and-sala-burton-fall-2024-unity" target="_blank" rel="noreferrer" className="portfolioLink">
              <div className="workspanel">
                {/*<img src={abrakajumpa} alt="Abrakajumpa Icon" className="worksimg" />*/}
                <div className="workspanelheader">
                  <h2>Instructor Assitant at Mission Bit</h2>
                  <p className="workspaneldesc">
                  Mission Bit is a program that teaches tech to high schoolers. My class was a game design class, we taught 18 high schoolers 
                  how to use Unity and gave them a strong fundamental intro to Unity to allow them to be able to learn how to create a game.
                  I answered many questions from students as well as teaching them important concepts and practices when developing a game.
                   At the end of the semester several of the students volunteered to nominate their game projects to a demo day competition
                  where one of our groups won "most innovative". Click to see all of the students' projects.
                  </p>
                </div>
              </div>
            </a>


          </>
        )}



      </div>
    </section>
  );
}

export default Experience;
