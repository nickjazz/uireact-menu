import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isObject, values, get} from 'lodash';
import MenuItem from './MenuItem'
import MenuSub from './MenuSub'
import MenuLabel from './MenuLabel'
import MenuWrapper from './MenuWrapper'
// import './menu.scss'
// import './dashborad.scss'
// import './lightmenu.scss'

let i = 0

class Menu extends Component {

  static propTypes = {
    children: PropTypes.any,
    containerClass: PropTypes.string,
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
  static Label = MenuLabel
  static Wrapper = MenuWrapper

  static defaultProps = {
    direction: 'vertical',
    containerClass: 'lightmenu'
  }

  jsonData = null

  componentWillMount() {
    const { data } = this.props;
    if (data && isObject(data)) {
      this.jsonData = values(data)
    }
  }

  renderMenu = (menu) => {
    const submenu = get(menu, ['submenu'])
    return(
      <MenuItem
        // ignore link if have submenu
        to={ submenu ? null : (menu.href || menu.to)}
        key={i++}
      >
        <MenuLabel>{get(menu, 'title')}</MenuLabel>
        { submenu &&
          <MenuSub>
            {
              submenu.map(sub => {
                return this.renderMenu(sub)
              })
            }

          </MenuSub>
        }
      </MenuItem>
    )
  }


  render() {

    const { children, data, direction, containerClass} = this.props
    let jsonDataChild

    if (this.jsonData)
      jsonDataChild = this.jsonData.map((e, i) => {
        return this.renderMenu(e)
      })

    const enhanceChild = data
    ? jsonDataChild
    : children

    return (
      <nav className={`uireact-menu ${direction} ${containerClass}`}>
        {enhanceChild}
      </nav>
    );
  }

}


export default Menu;
