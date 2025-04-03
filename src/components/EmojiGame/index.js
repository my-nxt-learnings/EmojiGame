import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

const initialState = {
  currenSelectedId: [],
  clickCount: 1,
  currentScore: 0,
  topScore: 0,
  winningStatus: '',
}

class EmojiGame extends Component {
  state = initialState

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmoji = id => {
    const {currenSelectedId, currentScore, topScore, clickCount} = this.state
    this.shuffledEmojisList()
    if (clickCount === 12) {
      if (!currenSelectedId.includes(id)) {
        this.setState(prevState => ({
          currentScore: prevState.currentScore + 1,
          winningStatus: 'won',
          topScore: 12,
        }))
      } else {
        this.setState(prevState => ({
          winningStatus: 'lost',
          topScore:
            prevState.topScore > currentScore
              ? prevState.topScore
              : currentScore,
        }))
      }
    } else if (!currenSelectedId.includes(id)) {
      this.setState(prevState => ({
        currentScore: prevState.currentScore + 1,
        clickCount: prevState.clickCount + 1,
        currenSelectedId: [...prevState.currenSelectedId, id],
      }))
    } else {
      this.setState(prevState => ({
        winningStatus: 'lost',
        topScore:
          prevState.topScore > currentScore ? prevState.topScore : currentScore,
      }))
    }
  }

  onClicking = () => {
    this.setState(prevState => ({
      ...initialState,
      topScore: prevState.topScore,
    }))
  }

  render() {
    const {currentScore, topScore, winningStatus} = this.state

    const {emojisList} = this.props

    return (
      <div className="container">
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          winningStatus={winningStatus}
        />
        {winningStatus !== '' && (
          <WinOrLoseCard
            currentScore={currentScore}
            winningStatus={winningStatus}
            onClicking={this.onClicking}
          />
        )}
        {winningStatus === '' && (
          <div className="emojiContainer">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                eachEmoji={eachEmoji}
                clickEmoji={this.clickEmoji}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
