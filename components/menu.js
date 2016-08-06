import React, { Component } from 'react';

class Menu extends Component {
  constructor () {
    super();
  }

  render () {

    const menuItems = this.props.menuItems.map( item =>
      (<li key={item.category} onClick={ this.props.selectTab.bind(null, item.category) } style={{display: 'inline-style'}}>
        <a className={item.selected? 'selected': ''} href="#0">{item.category} </a>
      </li>
      )
    );

    return (
      <div className="tab-filter-wrapper">
        <div className="tab-filter">
          <ul>
            <li className="placeholder">
              <a data-type="all" href="#0">All</a>
            </li>
            {menuItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
