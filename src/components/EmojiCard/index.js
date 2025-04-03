// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const changeEmoji = () => {
    clickEmoji(id)
  }
  return (
    <div className="emojiCard">
      <button type="button" onClick={changeEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </div>
  )
}

export default EmojiCard
