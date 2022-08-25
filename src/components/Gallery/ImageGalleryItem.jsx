import PropTypes from 'prop-types';
import s from './ImageGallery.module.scss';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  toggleModal,
}) => {
  const getDataValue = ({ target }) => {
    toggleModal(target.dataset.largeimg);
  };

  return (
    <li className={s.galleryItem}>
      <img
        className={s.img}
        src={webformatURL}
        alt={tags}
        onClick={getDataValue}
        data-largeimg={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  toggleModal: PropTypes.func,
};

// має бути ще один параметр - функція, яка рендерить картинки
