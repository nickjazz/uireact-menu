import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

const hoverClassName = 'uireact-menu-hover'
const clickClassName = 'uireact-menu-click'
const itemClassName = 'uireact-menu-item'

class MenuItem extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    to: PropTypes.string
  }

  timeout = null

  addClass = (name) => {
    let el = this.el.parentNode.children
    // remove sibling class
    if (el) {
      let allChild = Array.from(el)
      allChild.map(e => {
        this.removeAllClick(e)
        e.classList.remove(name)
      })
    }

    clearTimeout(this.timeout)
    this.el.classList.add(name)
  }

  onMouseEnter = () => {
    this.addClass(hoverClassName)
  }

  onClick = (e) => {
    // toggleClass
    if (this.el && this.el.classList.contains(clickClassName)) {
      this.removeAllClick(document)
      return this.el.classList.remove(clickClassName)
    }

    // if click on submenu
    this.addClass(clickClassName)
    e.stopPropagation()
  }

  onMouseLeave = () => {
    this.timeout = setTimeout(() => {
      this.el && this.el.classList.remove(hoverClassName)
    }, 550)
  }

  removeAllClick = (e) => {
    const activeClickItems = e.getElementsByClassName(clickClassName)
    while(activeClickItems.length > 0) {
      activeClickItems[0].classList.remove(clickClassName)
    }
  }

  render() {
    const { to } = this.props;

    const ElementType = to ? 'a' : 'div'

    return (
      <ElementType
        ref={el => this.el = el}
        className={itemClassName}
        onClick={this.onClick}
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
