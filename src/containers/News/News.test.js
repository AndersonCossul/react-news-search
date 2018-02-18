/* 
  IMPORTANT NOTE:
  Here I'll be testing the named export, not the one connected to Redux.
  There are no mocks, just simulating the same props as passed to mapStateToProps on the real component!
*/

import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {News} from './News'
import Cards from '../../components/Cards/Cards'

configure({ adapter: new Adapter() })

describe('<News />', () => {
  let props = {
    news: null,
    loading: false,
    error: null,
    country: null,
  }
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <News
        news={props.news}
        loading={props.loading}
        error={props.error}
        country={props.country} />
    )
  })

  it('should render without errors', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should render news', () => {
    wrapper.setProps({
      news: [{id: 'useless'}]
    })
    expect(wrapper.find(Cards)).toHaveLength(1)
  })

  it('should show that country has no news', () => {
    wrapper.setProps({
      news: [],
      country: {name: 'Brazil'}
    })
    expect(wrapper.contains(<p>No articles found for Brazil.</p>)).toEqual(true)
  })

  it('should show loading if loading prop is on independent of other props EXCEPT for error', () => {
    wrapper.setProps({
      news: [{id: 'useless'}],
      error: null,
      country: {name: 'Brazil'},
      loading: true
    })

    expect(wrapper.contains(<p>Loading...</p>)).toEqual(true)
  })

  it('should indicate that has errors independent of other props', () => {
    wrapper.setProps({
      news: [{id: 'useless'}],
      error: 'ERROR!',
      country: {name: 'Brazil'},
      loading: true
    })
    expect(wrapper.contains(<p>ERROR!</p>)).toEqual(true)
  })
})