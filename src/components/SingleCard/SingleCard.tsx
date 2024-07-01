
import PropTypes from 'prop-types';
export default function GameCard() {
const GameCard = ({ singleGame }) => {
  return (
    <div className="game-card">
      <img src={singleGame.imgUrl[0]} alt={singleGame.title} />
      <h2>{singleGame.title}</h2>
      <p>{singleGame.comments.length} comments</p>
      <ul>
        {singleGame.similarGames.slice(0, 3).map((game, index) => (
          <li key={index}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
};

GameCard.propTypes = {
  singleGame: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    similarGames: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
}

GameCard()