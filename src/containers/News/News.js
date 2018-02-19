import React, { Component } from 'react'
import classes from './News.css'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import AutoCompleteInput from '../../components/IO/AutoCompleteInput'
import Cards from '../../components/Cards/Cards'

export class News extends Component {

  countrySelectedHandler = (country) => {
    this.props.updateSelectedCountry(country)
    this.props.fetchNews(country)
  }

  render() {
    let news = null

    if (this.props.news) {
      if (this.props.news.length) {
        news = (
          <main>
            {
              this.props.country
                ? <h1 className={classes.Title}>{this.props.country.name}</h1>
                : null
            }
            <Cards data={this.props.news} />
          </main>
        )
      } else {
        news = <p>No articles found for {this.props.country.name}.</p>
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
        <AutoCompleteInput onSelect={this.countrySelectedHandler} />
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

const { updateSelectedCountry, fetchNews } = actions
const mapDispatchToProps = { updateSelectedCountry, fetchNews }

export default connect(mapStateToProps, mapDispatchToProps)(News)
