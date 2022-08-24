import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button';

// import Api from '../api/Api';
import Pixabay from 'components/api/Api';
import s from './ImageGallery.module.scss';

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
    page: 1,

    // search: '',
  };
  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    const prevImage = prevProps.search;
    const nextImage = this.props.query;

    if (prevImage !== nextImage) {
      try {
        this.setState({ loading: true, page: 1 });
        const responce = await Pixabay(page, nextImage);
        this.setState({ images: responce.data.hits });
        // console.log('responce :>> ', responce);
      } catch (error) {
        console.log('error', error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { images, loading, error } = this.state;
    const { loadMore } = this;

    return (
      <>
        {error && <p>(error.message)</p>}
        {loading && <Loader />}
        {images && (
          <>
            <ul className={s.gallery}>
              {images?.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                />
              ))}
            </ul>
          </>
        )}
        <Button onClick={loadMore} title="Load more" />
      </>
    );
  }
}

export default ImageGallery;

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     })
//   ),
// };

//в map має бути ще один параметр - функція, яка рендерить картинки
