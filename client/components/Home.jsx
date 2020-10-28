import React from 'react'
import { Link } from 'react-router-dom';
import Wave from '../../public/assets/Wave.svg'

const Home = () => {
  return (
    <div className="app-container">
      <div className="nav">
      <div className="nav-left">
        <img src='https://www.flaticon.com/svg/static/icons/svg/3061/3061188.svg' className="wave-icon"></img>
        <h1>Ocean</h1>
      </div>
      <div className="nav-right">
        <h2>About</h2>
      </div>
    </div>
      <div className="home">
        <div className="home-top">
          <h1 className="home-title">A personality analyzer for Reddit</h1>
        </div>
        <img src={Wave} alt="Wave" className="wave"></img>
        <div className="home-bottom">
          <p className="home-bottom-left">Ocean uses IBM Watson to provide personality insights into comments, users, and entire subreddits.</p>
          <div class="home-button-container">
            <button className="home-button"><Link className="home-button-link" to="/calculator">Take A Dive</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home