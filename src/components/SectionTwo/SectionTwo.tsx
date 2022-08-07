import image1 from '../../images/torunlarImg1.png';
import image2 from '../../images/torunlarImg2.png';
import './SectionTwo.scss';

export default function SectionTwo() {
  return (
    <section className="SectionTwo">
      <div className="SectionTwo__images">
        <img
          className="SectionTwo__image-one"
          src={image1} 
          alt="torunlar tower" 
        />
        <img
          className="SectionTwo__image-two"
          src={image2} 
          alt="torunlar tower" 
        />
      </div>
      <div className="SectionTwo__info">
        <h3 className="SectionTwo__title">Home, Business and Life Together</h3>
        <div>
          <p className="SectionTwo__info-lines">2 residences with 42 storey and</p>
          <p className="SectionTwo__info-lines">1 office block with 36 storey.</p>
          <p className="SectionTwo__info-lines">Exceptional living center including</p>
          <p className="SectionTwo__info-lines">sports area, social zone, lounge area and</p>
          <p className="SectionTwo__info-lines">private kids club all in one complex.</p>
        </div>
        <p className="SectionTwo__paragraph">
          Consisting of three towers with one for offices and two for
          residences andgarden offices, Torun Center is preparing to
          bring a new aspect to the area by changing the appearance of
          Mecidiyeköy with its different office alternatives, rich residence
          life and modern city square. Designed by Emre Arolat inspired by
          the interpretation of “tropism” whichmeans orientation of plants
          towards the sun and located with different positions, the towers
          display the distinctive panoramic scenes of the city reaching out
          for the Marmara Sea and particularly the Bosphorus with all
          its facades thanks to this design.
        </p>
      </div>
    </section>
  )
}
