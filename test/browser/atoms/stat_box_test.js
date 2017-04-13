import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { jsdom } from 'jsdom'

import StatBox from '../../../src/browser/components/atoms/stat-box/index'
import StatCounter from '../../../src/browser/components/atoms/stat-counter/index'

describe.only('<StatBox />', () => {

  it('should return a div', () => {
    const wrapper = shallow(<StatBox />)
    expect(wrapper.find('div.uk-grid-small')).to.have.length(1)
  })

  context('should have a nested div', () => {
    it('should have a div inside of the main div', () => {
      const wrapper = mount(<StatBox />)
      expect(wrapper.find('div.uk-grid-small').childAt(0).type()).to.equal('div')
      expect(wrapper.find('div.uk-flex-left')).to.have.length(1)
    })
  })

  context('should render props', () => {
    it('should render the proper username value it is passed', () => {
      const wrapper = mount(<StatBox name="Keith" count="10"/>)
      expect(wrapper.props().name).to.equal('Keith')
    })
    it('should render proper count value it is passed', () => {
      const wrapper = mount(<StatBox name="Keith" count="10"/>)
      expect(wrapper.props().count).to.equal("10")
    })
  })

  context('inner div contains an instance of <StatCounter />', () => {
    it('should render <StatCounter/>', () => {
      const wrapper = mount(<StatBox name="Keith" count="10"/>)
      expect(wrapper.containsMatchingElement(<StatCounter />)).to.be.true

    })
  })

})
