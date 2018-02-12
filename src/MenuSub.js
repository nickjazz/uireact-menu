import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './menu.css'

class MenuSub extends Component {

  componentDidMount() {
    // add class to parent
    let el = ReactDOM.findDOMNode(this).parentNode
    el.classList.add('has-child')
  }

  render() {
    const { children } = this.props;

    return (
      <div className="uireact-menu-sub">
        {children}
      </div>
    );
  }

}

export default MenuSub;
