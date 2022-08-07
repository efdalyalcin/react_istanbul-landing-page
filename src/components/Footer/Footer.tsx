import './Footer.scss';
import phoneIcon from '../../images/phoneIcon.png';
import mailIcon from '../../images/mailIcon.png';
import adresIcon from '../../images/addressIcon.png';


export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__map" />
      <div className="Footer__contact">
        <h3 className="Footer__title">CONTACT</h3>
        <div className="Footer__tel">
          <img src={phoneIcon} alt="phone icon" className="Footer__icon-tel" />
          <a href="tel: +902122674747" className="Footer__links">
            0212 267 47 47 / 0212 267 45 45
          </a>
        </div>

        <div className="Footer__mail">
          <img src={mailIcon} alt="phone icon" className="Footer__icon-mail" />
          <a href="mailto: info@toruncenter.com" className="Footer__links">
            info@toruncenter.com
          </a>
        </div>

        <div className="Footer__address">
          <img src={adresIcon} alt="phone icon" className="Footer__icon-address" />
          <a 
            href="https://goo.gl/maps/N28eHuwvUsh5UvXV8" 
            target="_blank"
            rel="noopener noreferrer"
            className="Footer__links"
          >
            Fulya Mh. Büyükdere Cd. Akıncı Bayırı Sk. No: 74 34394 Şişli / İstanbul
          </a>
        </div>
      </div>
    </footer>
  )
}
