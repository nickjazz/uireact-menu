import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isObject, values, get} from 'lodash';
import MenuItem from './MenuItem'
import MenuSub from './MenuSub'
import './menu.css'

class Menu extends Component {

  static propTypes = {
    children: PropTypes.any,
    data: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]),
    direction: PropTypes.oneOf([
      'horizontal',
      'vertical'
    ])
  }

  static Item = MenuItem
  static Sub = MenuSub

  static defaultProps = {
    direction: 'vertical'
  }

  jsonData = null

  componentWillMount() {
    const { data } = this.props;
    if (data && isObject(data)) {
      this.jsonData = values(data)
    } else if (data) {
      this.jsonData = data
    }
  }

  render() {

    const { children, data, direction} = this.props
    let jsonDataChild

    if (this.jsonData)
      jsonDataChild = this.jsonData.map((e, i) => {
        const hasChild =  get(e, 'submenu')
        return(
          <MenuItem
            // ignore link if have submenu
            to={ hasChild ? null : (e.href || e.to)}
            key={i}
          >
            <span>{get(e, 'title')}</span>

            { hasChild &&
              <MenuSub>
                <MenuItem
                  to={e.href || e.to}
                  key={i}
                >
                  <span>{get(e, 'title')}</span>
                </MenuItem>
              </MenuSub>
            }
          </MenuItem>
        )
      })

    const enhanceChild = data
    ? jsonDataChild
    : children

    return (
      <nav className={`uireact-menu ${direction}`}>
        {enhanceChild}
      </nav>
    );
  }

}

export default Menu;
