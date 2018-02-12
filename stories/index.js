import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Menu from '../src';

const menuData = require('./menu.json')

const menuArray = [{
  'title': 'Menu 1',
  'href': 'google.com',
  'submenu': [{
    'title': 'Sub Menu1',
    'submenu': [{
      'title': 'Sub sub Menu1',
      'href': '#'
    }, {
      'title': 'Sub sub Menu2',
      'href': '#'
    }]
  }, {
    'title': 'Sub Menu2',
    'href': '#'
  }, {
    'title': 'Sub Menu3',
    'href': '#'
  }]
}, {
  'title': 'Menu 2',
  'submenu': [{
    'title': 'Sub Menu 2',
    'href': '#'
  }]
}, {
  'title': 'Menu 3',
  'href': '#'
}]

storiesOf('Menu', module)
  .add('Basic usage', () => {
    return (
      <div style={{width: '30vw'}}>
        <Menu>
          <Menu.Item to='http://google.com'>item 1</Menu.Item>
          <Menu.Item>item 2</Menu.Item>
          <Menu.Item>item 3</Menu.Item>
          <Menu.Item>item 4</Menu.Item>
          <Menu.Item>item 5</Menu.Item>
        </Menu>
      </div>
    )
  })
  .add('Direction usage', () => {
    return (
      <div style={{width: '60vw'}}>
        <Menu direction='horizontal'>
          <Menu.Item to='http://google.com'>horizontal item 1</Menu.Item>
          <Menu.Item>item 2</Menu.Item>
          <Menu.Item>item 3</Menu.Item>
          <Menu.Item>item 4</Menu.Item>
          <Menu.Item>item 5</Menu.Item>
        </Menu>
        <br />
        <Menu direction='vertical'>
            <Menu.Item to='http://google.com'>vertical item 1</Menu.Item>
          <Menu.Item>item 2</Menu.Item>
          <Menu.Item>item 3</Menu.Item>
          <Menu.Item>item 4</Menu.Item>
          <Menu.Item>item 5</Menu.Item>
        </Menu>
      </div>
    )
  })
  .add('Nested menu item', () => {
    return (
      <div style={{width: '80vw'}}>
        <div style={{width: '30vw'}}>
          <Menu>
            <Menu.Item to='http://google.com'>item 1</Menu.Item>
            <Menu.Item>
              item 2
              <Menu.Sub >
                <Menu.Item>item 2-1</Menu.Item>
                <Menu.Item>item 2-2</Menu.Item>
                <Menu.Item>
                  item 2-3
                  <Menu.Sub>
                    <Menu.Item>item 2-3-1</Menu.Item>
                    <Menu.Item>
                      item 2-3-1
                      <Menu.Sub>
                        <Menu.Item>item 2-3-1-1</Menu.Item>
                        <Menu.Item>item 2-3-1-2</Menu.Item>
                        <Menu.Item>item 2-3-1-3</Menu.Item>
                      </Menu.Sub>
                    </Menu.Item>
                    <Menu.Item>item 2-3-2</Menu.Item>
                  </Menu.Sub>
                </Menu.Item>
              </Menu.Sub>
            </Menu.Item>
            <Menu.Item>
              item 2
              <Menu.Sub >
                <Menu.Item>item 2-1</Menu.Item>
                <Menu.Item>item 2-2</Menu.Item>
                <Menu.Item>
                  item 2-3
                  <Menu.Sub>
                    <Menu.Item>item 2-3-1</Menu.Item>
                    <Menu.Item>
                      item 2-3-1
                      <Menu.Sub>
                        <Menu.Item>item 2-3-1-1</Menu.Item>
                        <Menu.Item>item 2-3-1-2</Menu.Item>
                        <Menu.Item>item 2-3-1-3</Menu.Item>
                      </Menu.Sub>
                    </Menu.Item>
                    <Menu.Item>item 2-3-2</Menu.Item>
                  </Menu.Sub>
                </Menu.Item>
              </Menu.Sub>
            </Menu.Item>
            <Menu.Item>item 3</Menu.Item>
            <Menu.Item>item 4</Menu.Item>
            <Menu.Item>item 5</Menu.Item>
            <Menu.Item>item 6</Menu.Item>
          </Menu>
        </div>

        <br />

        <Menu direction='horizontal'>
          <Menu.Item to='http://google.com'>item 1</Menu.Item>
          <Menu.Item>
            item 2
            <Menu.Sub>
              <Menu.Item>item 2-1</Menu.Item>
              <Menu.Item>item 2-2</Menu.Item>
              <Menu.Item>
                item 2-3
                <Menu.Sub>
                  <Menu.Item>item 2-3-1</Menu.Item>
                  <Menu.Item>
                    item 2-3-1
                    <Menu.Sub>
                      <Menu.Item>item 2-3-1-1</Menu.Item>
                      <Menu.Item>item 2-3-1-2</Menu.Item>
                      <Menu.Item>item 2-3-1-3</Menu.Item>
                    </Menu.Sub>
                  </Menu.Item>
                  <Menu.Item>item 2-3-2</Menu.Item>
                </Menu.Sub>
              </Menu.Item>
            </Menu.Sub>
          </Menu.Item>
          <Menu.Item>item 3</Menu.Item>
          <Menu.Item>item 4</Menu.Item>
          <Menu.Item>item 5</Menu.Item>
          <Menu.Item>item 6</Menu.Item>
        </Menu>
      </div>
    )
  })
  .add('With json data', () => {
    return (
      <div style={{width: '30vw'}}>
        <Menu data={menuData} />
      </div>
    )
  })
  .add('With array data', () => {
    return (
      <div style={{width: '30vw'}}>
        <Menu data={menuArray} />
      </div>
    )
  })
