import { Component } from 'react';

// import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import Pixabay from 'components/api/Api';
import s from './ImageGallery.module.scss';

class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
    page: 1,
    total: null,
    largeImageURL: '',
  };
  async componentDidUpdate(prevProps, prevState) {
    const { page, total } = this.state;

    const prevImage = prevProps.query;
    const nextImage = this.props.query;

    if (prevImage !== nextImage) {
      try {
        this.setState({ loading: true, page: 1 });
        const responce = await Pixabay(page, nextImage);
        this.setState({
          images: responce.data.hits,
          total: responce.data.total,
        });
      } catch (error) {
        console.log('error', error);
        console.log('message', error.message);
      } finally {
        this.setState({ loading: false });
      }
    }

    if (prevState.page !== page && page !== 1) {
      try {
        this.setState({ loading: true });
        const responce = await Pixabay(page, nextImage);
        this.setState({ images: [...prevState.images, ...responce.data.hits] });
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

  toggleModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    const { page, images, loading, error, total, showModal, largeImageURL } =
      this.state;
    const { loadMore, toggleModal } = this;

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
