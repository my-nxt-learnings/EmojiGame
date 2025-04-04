// Write your code here.

import './index.css'

const NavBar = props => {
  const {currentScore, topScore, winningStatus} = props
  return (
    <div className="Navbar">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="image"
        />
        <h1>Emoji Game</h1>
      </div>
      {winningStatus === '' && (
        <div>
          <p>Score: {currentScore}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
