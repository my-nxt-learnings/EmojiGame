// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {winningStatus, onClicking, currentScore} = props

  const playAgain = () => {
    onClicking()
  }
  return (
    <div>
      {winningStatus === 'lost' && (
        <div className="loseCard">
          <div>
            <h1>You Lose</h1>
            <p>Score: {currentScore}/12</p>

            <button type="button" onClick={playAgain} className="restart">
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        </div>
      )}
      {winningStatus === 'won' && (
        <div className="loseCard">
          <div>
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>12/12</p>
            <button type="button" onClick={playAgain}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
