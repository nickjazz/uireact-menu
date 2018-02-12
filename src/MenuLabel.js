import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class MenuLabel extends Component {

  static propTypes = {
    children: PropTypes.string
  }

  componentDidMount() {
    // add class to parent)
  }

  render() {
    const { children } = this.props;

    return (
      <span className="uireact-menu-label">
        {children}

        <span className="uireact-menu-icon"></span>
      </span>
    );
  }

}

export default MenuLabel;
