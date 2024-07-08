// organisms/Carousel.js
import GameCard from '../molecules/GameCard';

const Carousel = ({ game }) => {
  return (
    <div className="carousel">
      {game.map((game, index) => (
        <GameCard key={index} singleGame={game} />
      ))}
    </div>
  );
};

export default Carousel;