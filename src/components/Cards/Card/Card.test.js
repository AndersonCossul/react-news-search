import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Card from './Card'
import newPlaceholder from '../../../assets/images/new-placeholder.jpg'

configure({adapter: new Adapter()})

describe('<Card />', () => {
  let wrapper
  let props = {
    date: new Date(),
    title: 'Title'
  }

  beforeEach(() => {
    wrapper = shallow(<Card data={props} />)
  })

  it('renders default image placeholder if no image was passed', () => {
    expect(wrapper.contains(<img src={newPlaceholder} alt="Title" />)).toEqual(true)
  })
})
