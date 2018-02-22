import React, { Component } from 'react';

class MenuWrapper extends Component {

  render() {
    const {children} = this.props;
    return (
      <div className="uireact-menu-wrapper">
        {children}
      </div>
    );
  }

}

export default MenuWrapper;
