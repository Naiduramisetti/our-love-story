import "../styles/Gallery.css";

import favorite from "../assets/images/favorite.jpg";

function Gallery() {
  return (
    <section className="gallery">

      <h1>My Favorite Picture ❤️</h1>

      <img
        src={favorite}
        alt="Favorite"
        className="favorite-photo"
      />

      <div className="favorite-text">

        <p>
          Out of every picture we have...
        </p>

        <p>
          This one will always have
          a special place in my heart.
        </p>

        <p>
          I don't know why...
        </p>

        <p>
          But every time I look at it,
          I smile.
        </p>

        <p>
          You look confident.
        </p>

        <p>
          You look beautiful.
        </p>

        <p>
          And yes...
        </p>

        <p>
          You look a little bossy too. 😄
        </p>

        <p className="highlight">
          ❤️ This will always be my favorite picture of you.
        </p>

      </div>

    </section>
  );
}

export default Gallery;