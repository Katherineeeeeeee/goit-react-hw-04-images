import PropTypes from 'prop-types';
import s from './ImageGallery.module.scss';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <li className={s.galleryItem} key={id}>
      <img className={s.img} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  // largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

// має бути ще один параметр - функція, яка рендерить картинки
