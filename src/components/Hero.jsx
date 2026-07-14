import { useRef, useState } from "react";
import ourSong from "../assets/music/Until_I_Found_You.mp3";
import "../styles/Hero.css";


function Hero() {

  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const scrollToStory = () => {
    const section = document.getElementById("story");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (err) {
      console.error("Unable to play audio:", err);
    }
  };

  return (
    <section
      className="hero"
      data-aos="fade-down"
    >

      {/* Audio */}
      <audio
        ref={audioRef}
        loop
      >
        <source src={ourSong} type="audio/mpeg" />
      </audio>

      {/* Stars */}
      <div className="stars"></div>

      {/* Moon */}
      <div className="moon"></div>

      {/* Hearts */}
      <div className="floating-heart heart1">❤️</div>
      <div className="floating-heart heart2">💖</div>
      <div className="floating-heart heart3">💕</div>

      {/* Glass Card */}
      <div
        className="glass-card"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >

        <h1 className="hero-title">
          Hi,
        </h1>

        <h2 className="hero-name">
          ❤️ Bujji Gaa ❤️
        </h2>

        <p className="hero-subtitle">
          Every beautiful story begins with one beautiful moment...
          <br /><br />
          Ours began with a photograph.
        </p>

        <div className="hero-buttons">

          <button
            className="journey-btn"
            onClick={scrollToStory}
          >
            ❤️ Begin Our Journey
          </button>

          <button
            className="music-btn"
            onClick={toggleMusic}
          >
            {playing ? "⏸ Pause Our Song" : "🎵 Play Our Song"}
          </button>

        </div>

        <p className="hero-bottom-text">
          Scroll down and relive every beautiful memory we've created together ❤️
        </p>

      </div>

    </section>
  );
}

export default Hero;