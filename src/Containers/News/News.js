import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import AutoCompleteInput from '../../Components/IO/AutoCompleteInput'
import Cards from '../../Components/Cards/Cards'

class News extends Component {
  countrySelectedHandler = (country) => {
    this.props.updateSelectedCountry(country)
    this.props.fetchNews(country)
  }

  render () {
    let news = null

    if (this.props.news) {
      if (this.props.news.length) {
        news = <Cards data={this.props.news} />
      } else {
        news = <p>No articles found for {this.state.country.name}</p>
      }
    }

    if (this.props.loading) {
      news = <p>Loading...</p>
    }

    if (this.props.error) {
      news = <p>{this.props.error}</p>
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
    news: state.news.news,
    loading: state.news.loading,
    error: state.news.error,
    country: state.countries.selectedAutocompleteCountry
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedCountry: (country) => dispatch(actions.updateSelectedCountry(country)),
    fetchNews: (country) => dispatch(actions.fetchNews(country))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
