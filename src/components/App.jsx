import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import s from './ImageFinder.module.scss';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './Gallery/ImageGallery';

// import Modal from './Modal';

export class App extends Component {
  state = {
    page: 1,
    search: '',
  };

  // componentDidUpdate(prevProps, prevState) {
  //   // const { page, search } = this.state;
  //   const prevPage = prevProps.page;
  //   const nextPage = this.props.page;

  //   if (prevPage !== nextPage) {
  //     // console.log('Change search of image');
  //     // console.log('prevPage:', prevPage);
  //     // console.log('nextPage:', nextPage);

  //     // this.fetchItems();

  //     this.setState({ loading: true });
  //     fetch(
  //       `https://pixabay.com/api/?q=${nextPage}&page=1&key=28738379-3ebe6166d3971e346b98a5bc0&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(response => response.json)
  //       .then(items => this.setState({ items }))
  //       .finally(() => this.setState({ loading: false }));
  //   }
  // }
  /*   як Богдан показував
  async fetchItems() {
    const { page } = this.state;
    this.setState({ loading: true });

    try {
      const data = await getImages(page);
      // console.log('data :>> ', data);
      // this.setState(({ hits }) => ({
      //   items: [...hits, ...data],
      // }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }*/

  /*так сказав Влад
  handleChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      alert('choose another word');
      return;
    }
    this.setState({ search: '' });
  };
   */

  //Repeta
  handleSearch = search => {
    this.setState({ search });
  };

  // loadMore = () => {
  //   this.setState(({ page }) => ({
  //     page: page + 1,
  //   }));
  // };

  render() {
    const { search } = this.state;

    return (
      <div>
        {/* <Searchbar onChange={this.handleChange} value={search} /> Vlad*/}
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery query={search} />
        {/* <Modal /> */}
        <ToastContainer />
      </div>
    );
  }
}
