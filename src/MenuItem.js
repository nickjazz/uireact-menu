import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class MenuItem extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    to: PropTypes.string
  }

  last = -1
  timeout = null

  onMouseEnter = () => {
    let el = ReactDOM.findDOMNode(this).parentNode.children
    // remove sibling class
    if (el) {
      let allChild = Array.from(el)
      allChild.map(e => e.classList.remove('uireact-menu-hover'))
    }
    clearTimeout(this.timeout)
    this.el.classList.add('uireact-menu-hover')
  }

  onMouseLeave = () => {
    this.timeout = setTimeout(() => {
      this.el.classList.remove('uireact-menu-hover')
    }, 550)
  }

  render() {
    const { onClick, to } = this.props;

    const ElementType = to ? 'a' : 'div'

    return (
      <ElementType
        ref={el => this.el = el}
        className='uireact-menu-item '
        onClick={onClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        href={to}
      >
        {this.props.children}
      </ElementType>
    );
  }

}

export default MenuItem;
