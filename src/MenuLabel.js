import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const MenuLabel = ({ children }) => {
  return (
    <span className="uireact-menu-label">
      {children}

      <span className="uireact-menu-icon"></span>
    </span>
  )
}

MenuLabel.propTypes = {
  children: PropTypes.string
}


export default MenuLabel;
