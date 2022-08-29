import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Pixabay from 'components/api/Api';
import s from './ImageGallery.module.scss';

import ImageGalleryItem from './ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const ImageGallery = ({ page, query, loadMore }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (query) {
      fetchImages();
    }

    async function fetchImages() {
      try {
        setLoading(true, page);
        const { data } = await Pixabay(page, query);
        setImages(data.hits);
        setTotal(data.total);
      } catch (error) {
        setError(error);
        console.log('message', error.message);
      } finally {
        setLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (page !== '' && page !== 1) {
      fetchImages();
    }

    async function fetchImages() {
      try {
        setLoading(true);
        const { data } = await Pixabay(page, query);
        setImages([...images, ...data.hits]);
        setTotal(data.total);
      } catch (error) {
        setError(error);
        console.log('message', error.message);
      } finally {
        setLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const toggleModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  return (
    <>
      {error && <p>(error.message)</p>}
      {loading && <Loader />}
      {images && (
        <>
          <ul className={s.gallery}>
            {images?.map(({ webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={webformatURL}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                toggleModal={toggleModal}
              />
            ))}
          </ul>
        </>
      )}
      {12 * page <= total && <Button onClick={loadMore} text={'Load more'} />}
      {largeImageURL && <Modal onClose={toggleModal} src={largeImageURL} />}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
};
