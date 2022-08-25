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
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery query={search} />
      </div>
    );
  }
}
