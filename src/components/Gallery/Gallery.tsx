import { useState } from 'react';
import cn from 'classnames';
import './Gallery.scss';
import image1 from '../../images/gallery1.png';
import image2 from '../../images/gallery2.png';
import image3 from '../../images/gallery3.png';

const galleryItems = ['INSIDE IMAGES', 'OUTSIDE IMAGES', 'FLOOR PLAN'];
const galleryImages = [image1, image2, image3];

export default function Gallery() {
  const [activeLink, setActiveLink] = useState(0);
  const [isImageOneActive, setIsImageOneActive] = useState(false);
  const [isImageTwoActive, setIsImageTwoActive] = useState(true);
  const [isImageThreeActive, setIsImageThreeActive] = useState(false);

  return (
    <section className="Gallery" id="Gallery">
      <h3 className="Gallery__title">Gallery</h3>
      <div className="Gallery__subtitles-wrapper">
        {galleryItems.map((item, index) => (
          <a 
            key={index}
            href="#Gallery"
            className={cn("Gallery__subtitles", {'Gallery__subtitles--active': index === activeLink})}
            onClick={() => setActiveLink(index)}
          >
            {item}
          </a>
        ))}
      </div>
      <div className="Gallery__images">
        <img 
          id="image-one"
          src={image1} 
          alt="torunlar tower inside" 
          className={cn("Gallery__image-one", {'Gallery__image--active': isImageOneActive })}
        />
        <img 
          id="image-two"
          src={image2} 
          alt="torunlar tower inside" 
          className={cn("Gallery__image-two", {'Gallery__image--active': isImageTwoActive })}
        />
        <img 
          id="image-three"
          src={image3} 
          alt="torunlar tower inside" 
          className={cn("Gallery__image-three", {'Gallery__image--active': isImageThreeActive })}
        />
      </div>
    </section>
  )
}
