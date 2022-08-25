import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

// import s from './ImageFinder.module.scss';

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
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery query={search} />
        <ToastContainer />
      </div>
    );
  }
}
