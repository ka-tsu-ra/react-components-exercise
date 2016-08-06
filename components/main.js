import React, { Component } from 'react';
import filters from '../mocks/filters';
import Book from './book';
import Menu from './menu';
import Search from './search';
import books from '../mocks/books';


class Main extends Component {
  constructor () {
    super();
    this.closeSideBar = this.closeSideBar.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
    this.search = this.search.bind(this);
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      books,
      filters,
    };
  }

  selectTab ( category ) {
    this.setState({
      filters: filters.map(filter => {
        if (filter.category === category) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
        return filter;
      }),
     books: category === 'All'? books : books.filter( book => {
      return book.category === category;
     }),
    });
  }

  closeSideBar () {
    this.setState({
      navClosed: false
    });
  }

  openSideBar () {
    this.setState({
      navClosed: true
    });
  }

  search (input) {
    console.log(input.target.value);
  }

  render () {
    const { books, filters } = this.state;

    let className = 'gallery';

    if ( this.state.navClosed ) {
      className += ' filter-is-visible';
    }

    let bookElements = this.state.books.map( book => <Book title={book.title} cover={book.cover} />);

    return (
    <main className="main-content">
      <Menu
        menuItems={this.state.filters}
        selectTab={this.selectTab}/>

      <section className={ className }>
        { bookElements }
      </section>

      <Search
        navClosed={this.state.navClosed}
        closeSideBar={this.closeSideBar}
        openSideBar={this.openSideBar}
      />
    </main>
   );
  }
}

export default Main;
