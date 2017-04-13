import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { jsdom } from 'jsdom'

global.document = jsdom('');
global.window = document.defaultView;

import Game from '../../../src/browser/components/pages/game/index'
import Scorecard from '../../../src/browser/components/molecules/scorecard/index'

describegst('<Game />', () => {
  context('testing game buttons that get rendered below', () => {
    context('buttons should render if game page is receiving data from db', () => {
      it('should render the "correct" button', () => {
        const wrapper = mount(<Game content={{}} skipped={[5]} questions={[9]}/>)
        expect(wrapper.find('#correct').exists()).to.be.true
      })
      it('should render the "Skip" button', () => {
        const wrapper = mount(<Game content={{}} skipped={[5]} questions={[9]}/>)
        expect(wrapper.find('#skipped').exists()).to.be.true
      })
      it('should render the "Show Answer" button', () => {
        const wrapper = mount(<Game content={{}} skipped={[5]} questions={[9]}/>)
        expect(wrapper.find('#show').exists()).to.be.true
      })
    })
    context('buttons wont render if game page receives no data', () => {
      it('should not render the "correct" button', () => {
        const wrapper = mount(<Game content={{}} skipped={[]} questions={[]}/>)
        expect(wrapper.find('#correct').exists()).to.be.false
      })
      it('should not render the "skipped" button', () => {
        const wrapper = mount(<Game content={{}} skipped={[]} questions={[]}/>)
        expect(wrapper.find('#skipped').exists()).to.be.false
      })
      it('should not render the "Show Answer" button', () => {
        const wrapper = mount(<Game content={{}} skipped={[]} questions={[]}/>)
        expect(wrapper.find('#show').exists()).to.be.false
      })
    })
  })
  context('elements rendered', () => {
    it('should render the <Scorecard /> component first', () => {
      const wrapper = shallow(<Game content={{}} skipped={[]} questions={[]}/>)
      expect(wrapper.childAt(0).matchesElement(<Scorecard />)).to.be.true
    })
    it('should render the progress bar second', () => {
      const wrapper = shallow(<Game content={{}} skipped={[]} questions={[]}/>)
      expect(wrapper.childAt(1).matchesElement(<progress />)).to.be.true
    })
    it('should render a text area for interview notes', () => {
      const wrapper = mount(<Game content={{}} skipped={[]} questions={[]}/>)
      expect(wrapper.find('textarea').exists()).to.be.true
      expect(wrapper.find('textarea').parent().is('div.uk-container-center')).to.be.true
    })
    it('should render Hint button', () => {
      const wrapper = shallow(<Game content={{}} skipped={[]} questions={[]}/>)
      expect(wrapper.find('button.uk-button').exists()).to.be.true
    })
  })
})
