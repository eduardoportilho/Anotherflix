import React from 'react'
import Search from '../js/Search'
import ShowCard from '../js/ShowCard'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import preload from '../public/data.json'

test('Search should search titles', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchTerm = 'house'
  const component = shallow(<Search />)
  component.find('input').simulate('change', {target: {value: searchTerm}})

  const showCount = preload.shows.filter((show) => {
    return `${show.title} ${show.title}`
      .toUpperCase()
      .indexOf(searchTerm.toUpperCase()) >= 0
  })

  expect(component.find(ShowCard).length).toEqual(2)
})