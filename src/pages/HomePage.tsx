import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import GameCarousel from "../components/GameCarousel";
import GenreListPreview from "../components/GenreListPreview";

const HomePage = () => {


  return (
    <>
      <div className="home-page">
        <div className="home-hero">
        <Image className="home-hero__image" src="/gamebanner.webp" alt="Game banner" />

        <div className="home-hero__text">
          <h1>Discover your next adventure</h1>
          <p>Explore games, build your backlog and find your next favorite.</p>
          <Button variant="light">Explore games</Button>

        </div>
        </div>

        <GameCarousel/>

        <GenreListPreview/>

      </div>
    </>
  );
};

export default HomePage;
