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

  it('should render three Select tags', () => {
    const wrapper = shallow(<GameOptions parse={{}} />)
    expect(wrapper.find(SelectTag).length).to.equal(3)
  })

})
