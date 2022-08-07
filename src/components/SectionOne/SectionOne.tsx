import './SectionOne.scss';
import SectionOneImg from '../../images/istanbul1.png';

export default function SectionOne() {
  return (
    <section className="Section-one">
      <div className="Section-one__info">
        <h3 className="Section-one__title">A New Perspective to Istanbul</h3>
        <p>
          Inspired by this connecting feature of Istanbul, where the continents
          of Asia and Europe, the west and the east, the old and the new,
          the modern and the traditional, the universal and the local
          are together in a great harmony, Torun Center provides new
          definitions for the business world and modern life. Based on
          its great experience and knowledge, Torun Center brings a new 
          breath and a new perspective to Istanbul,
          the world’s most colorful and cosmopolitan city.
        </p>
        <p>
          Welcome to the brilliant world of Torun Center rising up with our
          philosophy “WORTH TO INVEST, WORTH TO LIVE” in Mecidiyeköy located
          in the center of Istanbul, by the side of the Bosporus
          Bridge and at the heart of the business world.
        </p>
      </div>
      <div className="Section-one__image-wrapper">
        <img 
          className="Section-one__image"
          src={SectionOneImg} 
          alt="istanbul galata tower" 
        />
      </div>
    </section>
  )
}
