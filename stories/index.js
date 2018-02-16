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
      <div style={{width: '30vw', height: '100vh'}}>
        <Menu>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Photos</Menu.Item>
          <Menu.Item>Message</Menu.Item>
          <Menu.Item>Music</Menu.Item>
          <Menu.Item>Video </Menu.Item>
        </Menu>
      </div>
    )
  })
  .add('Submenu', () => {
    return (
      <div style={{width: '30vw', height: '100vh'}}>
        <Menu>
          <Menu.Item>
            <Menu.Label>Home</Menu.Label>
            <Menu.Sub>
              <Menu.Item>item 2-1</Menu.Item>
              <Menu.Item>item 2-2</Menu.Item>
            </Menu.Sub>
          </Menu.Item>
        </Menu>
      </div>
    )
  })
  .add('Direction usage', () => {
    return (
      <div style={{width: '100vw'}}>
        <Menu direction='horizontal'>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Photos</Menu.Item>
          <Menu.Item>Message</Menu.Item>
          <Menu.Item>Music</Menu.Item>
          <Menu.Item>Video </Menu.Item>
        </Menu>
      </div>
    )
  })
  .add('Nested menu item', () => {
    return (
      <div style={{width: '80vw'}}>
        <div style={{width: '30vw'}}>
          <Menu>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>
              <Menu.Label>Photos</Menu.Label>
              <Menu.Sub >
                <Menu.Item>item 2-1</Menu.Item>
                <Menu.Item>item 2-2</Menu.Item>
                <Menu.Item>
                  <Menu.Label>item 2-3</Menu.Label>
                  <Menu.Sub>
                    <Menu.Item>item 2-3-1</Menu.Item>
                    <Menu.Item>
                      <Menu.Label>item 2-3-1</Menu.Label>
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
              <Menu.Label>Message</Menu.Label>
              <Menu.Sub >
                <Menu.Item>item 2-1</Menu.Item>
                <Menu.Item>item 2-2</Menu.Item>
                <Menu.Item>
                  <Menu.Label>item 2-3</Menu.Label>
                  <Menu.Sub>
                    <Menu.Item>item 2-3-1</Menu.Item>
                    <Menu.Item>
                      <Menu.Label>item 2-3-1</Menu.Label>
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
            <Menu.Item>Music</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
            <Menu.Item>Favorite</Menu.Item>
            <Menu.Item>Follow</Menu.Item>
          </Menu>
        </div>

        <br />

        <Menu direction='horizontal'>
          <Menu.Item to='http://google.com'>item 1</Menu.Item>
          <Menu.Item>
            <Menu.Label>Photos</Menu.Label>
            <Menu.Sub>
              <Menu.Item>item 2-1</Menu.Item>
              <Menu.Item>item 2-2</Menu.Item>
              <Menu.Item>
                <Menu.Label>Message</Menu.Label>
                <Menu.Sub>
                  <Menu.Item>item 2-3-1</Menu.Item>
                  <Menu.Item>
                    <Menu.Label>Video</Menu.Label>
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
  .add('(Theme) Admin dashborad', () => {
    return (
      <div style={{width: '30vw', height: '100vh'}}>
        <Menu containerClass='dashborad-menu'>
          <Menu.Item>
            <Menu.Label>Home</Menu.Label>
            <Menu.Sub>
              <Menu.Item>item 2-1</Menu.Item>
              <Menu.Item>item 2-2</Menu.Item>
              <Menu.Item>
                <Menu.Label>Message</Menu.Label>
                <Menu.Sub>
                  <Menu.Item>item 2-3-1</Menu.Item>
                  <Menu.Item>
                    <Menu.Label>Video</Menu.Label>
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
          <Menu.Item>Photos</Menu.Item>
          <Menu.Item>Message</Menu.Item>
          <Menu.Item>Music</Menu.Item>
          <Menu.Item>Video </Menu.Item>
        </Menu>
      </div>
    )
  })
