import React, { Component } from 'react';

class Search extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <div className={ this.props.navClosed? 'filter filter-is-visible': 'filter' }>
          <form>
            <div className="filter-block">
              <h4>Search</h4>
              <div className="filter-content">
                <input type="search" placeholder="title, price..." onChange={ this.onChange }/>
              </div>
            </div>
          </form>
          <a href="#0" className="close" onClick={ this.props.closeSideBar }>Close</a>
        </div>
        <a href="#0" className="filter-trigger" onClick={ this.props.openSideBar }>Filters</a>
      </div>
    )
  }
}

export default Search;
