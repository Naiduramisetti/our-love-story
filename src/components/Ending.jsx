import finalEnding from "../assets/images/final-ending.png";
import "../styles/Ending.css";

function Ending() {
  return (
    <section className="ending">

      <img
        src={finalEnding}
        alt="I Love You Bujji Gaa"
        className="ending-image"
      />

    </section>
  );
}

export default Ending;