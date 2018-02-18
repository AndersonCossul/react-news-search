import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import AutoCompleteInput from '../../Components/IO/AutoCompleteInput'
import Cards from '../../Components/Cards/Cards'

class News extends Component {
  state = {
    news: null,
    hasError: false,
    isLoading: false
  }

  getNews () {
    
  }

  countrySelectedHandler = (country) => {
    this.props.updateSelectedCountry(country)
    this.props.fetchNews(country)
  }

  render () {
    let news = null

    if (this.state.hasError) {
      news = <p>There was an error when getting the news.</p>
    }

    if (this.state.isLoading) {
      news = <p>Loading...</p>
    }

    if (this.state.news) {
      if (this.state.news.length) {
        news = <Cards data={this.state.news} />
      } else {
        news = <p>No articles found for {this.state.country_name}</p>
      }
    }

    return (
      <div>
        <AutoCompleteInput
          onSelect={this.countrySelectedHandler}
          placeholder="Type a Country"/>
        {news}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedCountry: (country) => dispatch(actions.updateSelectedCountry(country)),
    fetchNews: (country) => dispatch(actions.fetchNews(country))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
