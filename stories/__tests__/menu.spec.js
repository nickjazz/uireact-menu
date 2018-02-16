import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Menu from '../../src';
const menuData = require('../../stories/menu.json')
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

describe('Menu', () => {
  it('Basic usage', () => {
    const output = shallow(
      <div style={{width: '30vw', height: '100vh'}}>
        <Menu>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Photos</Menu.Item>
          <Menu.Item>Message</Menu.Item>
          <Menu.Item>Music</Menu.Item>
          <Menu.Item>Video </Menu.Item>
        </Menu>
      </div>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Direction usage', () => {
    const output = shallow(
      <div style={{width: '100vw'}}>
        <Menu direction='horizontal'>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Photos</Menu.Item>
          <Menu.Item>Message</Menu.Item>
          <Menu.Item>Music</Menu.Item>
          <Menu.Item>Video </Menu.Item>
        </Menu>
      </div>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('Nested menu item', () => {
    const output = shallow(
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
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('With json data', () => {
    const output = mount((
      <div style={{width: '30vw'}}>
        <Menu data={menuData} />
      </div>
    ));
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('With json data', () => {
    const output = mount((
      <div style={{width: '30vw'}}>
        <Menu data={menuArray} />
      </div>
    ));
    expect(shallowToJson(output)).toMatchSnapshot();
  });

});
