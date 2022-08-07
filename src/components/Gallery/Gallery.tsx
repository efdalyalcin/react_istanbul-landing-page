import { useState } from 'react';
import cn from 'classnames';
import './Gallery.scss';
import image1 from '../../images/gallery1.png';
import image2 from '../../images/gallery2.png';
import image3 from '../../images/gallery3.png';

const galleryItems = ['INSIDE IMAGES', 'OUTSIDE IMAGES', 'FLOOR PLAN'];

export default function Gallery() {
  const [activeLink, setActiveLink] = useState(0);
  const [galleryImages, setGalleryImages] = useState<string[]>([image1, image2, image3])

  const rightClick = () => {
    const img = galleryImages;
    setGalleryImages([img[2], img[0], img[1]]);
  };

  const leftClick = () => {
    const img = galleryImages;
    setGalleryImages([img[1], img[2], img[0]]);
  };

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
        <button 
          type="button"
          onClick={leftClick}
          className="Gallery__left-button"
        />
        
        {galleryImages.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt="torunlar tower inside" 
            className={cn(`Gallery__image-${index}`, {'Gallery__image--active': index === 1 })}
          />
        ))}

        <button 
          type="button"
          onClick={rightClick}
          className="Gallery__right-button"
        />
      </div>
    </section>
  )
}
