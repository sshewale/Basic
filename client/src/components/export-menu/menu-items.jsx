import React, { Component } from 'react';
import { MenuItem } from '@material-ui/core';

class MenuItems extends Component {
  state = {};

  render() {
    const { items, onExport } = this.props;
    let menuItems = items.map((item) => (
      <MenuItem
        key={item}
        className="menu-items"
        onClick={() => onExport(item)}
      >
        {item}
      </MenuItem>
    ));
    return <>{menuItems}</>;
  }
}

export default MenuItems;
