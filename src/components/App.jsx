import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './Gallery/ImageGallery';

export class App extends Component {
  state = {
    page: 1,
    search: '',
  };

  handleSearch = search => {
    this.setState({ search, page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const { search, page } = this.state;

    return (
      <div>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery query={search} page={page} loadMore={this.loadMore} />
      </div>
    );
  }
}
