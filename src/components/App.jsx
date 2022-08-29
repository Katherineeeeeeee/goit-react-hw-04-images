import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './Gallery/ImageGallery';

const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = search => {
    setSearch(search);
    setPage(1);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <ToastContainer autoClose={3000} />
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery query={search} page={page} loadMore={loadMore} />
    </div>
  );
};

export default App;
