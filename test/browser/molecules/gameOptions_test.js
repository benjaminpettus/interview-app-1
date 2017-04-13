import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { jsdom } from 'jsdom'

import GameOptions from '../../../src/browser/components/molecules/game-options/index.js'
import SelectTag from '../../../src/browser/components/atoms/select-tag/index'

global.document = jsdom('');
global.window = document.defaultView;

describe('<GameOptions />', () => {
  const topics = ["JavaScript", "http", "SQL"]
  const difficulty = ["beginner", "intermediate", "advanced"]

  it('should render a div', () => {
    const wrapper = shallow(<GameOptions options={[]} parse ={[]} value={''}  />)
    expect(wrapper.find('div').exists()).to.be.true
  })
  context('it should render a form', () => {
    it('has a form element', () => {
      const wrapper = shallow(<GameOptions options={[]} parse ={[]} value={''}  />)
      expect(wrapper.find('div').childAt(2).type()).to.equal('form')
    })
    it('contains a fieldset as its first child', () => {
      const wrapper = mount(<GameOptions options={[]} parse ={[]} value={''}  />)
      expect(wrapper.find('form').childAt(0).type()).to.equal('fieldset')
    })
    context('it should render three select tags', () => {
      it('should render three Select tags', () => {
        const wrapper = mount(<GameOptions options={[]} parse ={[]} value={''}  />)
        expect(wrapper.find(SelectTag).length).to.equal(3)
      })
    })
  it('should render a button', () => {
    const wrapper = mount(<GameOptions options={[]} parse ={[]} value={''}  />)
    expect(wrapper.find('button').length).to.equal(1)
  })

  })

})
