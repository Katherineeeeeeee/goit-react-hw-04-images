import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './ImageFinder.module.scss';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      // toast('choose another word');
      return alert('choose another word');
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            //РЕПЕТА
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            //РЕПЕТА

            //так сказав Влад
            // onChange={this.props.onChange}
            // value={this.props.value}
            //так сказав Влад
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
