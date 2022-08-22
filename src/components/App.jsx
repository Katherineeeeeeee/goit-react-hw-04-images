import Searchbar from './Searchbar';
import ImageGallery from './Gallery/ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';

export const App = () => {
  return (
    <div>
      <Searchbar />
      <ImageGallery />
      <Loader />
      <Button />
      <Modal />
    </div>
  );
};
