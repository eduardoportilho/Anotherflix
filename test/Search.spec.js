import React from 'react'
import Search from '../js/Search'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('Search should search titles', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
