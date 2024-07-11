import React from 'react'
import './intro.css';
import bg from '../../assets/self.png'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello!</span>
        <span className="introText"> I'm <span className="introName">Arthur,</span><br />Game Designer  <br/>and Computer Scientist</span>
        <p className="introPara">Looking for opportunities in the industry</p>

      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>

  );
}

export default Intro