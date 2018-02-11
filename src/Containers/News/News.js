import React, { Component } from 'react'
import axios from 'axios'
import AutoCompleteInput from '../../Components/IO/AutoCompleteInput'
import Cards from '../../Components/Cards/Cards'
import styles from './News.css'

class News extends Component {
  state = {
    news: null,
    hasError: false,
    country_names_list: [],
    country_name: null,
    country_code: null,
    isLoading: false
  }

  componentDidMount () {
    this.getCountryNames()
  }

  getCountryNames () {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        const formattedList = response.data.map((country, index) => {
          return {
            id: index,
            name: country.name
          }
        })
        this.setState({country_names_list: formattedList})
      })
  }

  onAutoCompleteInputSelectChanged = (selectedCountryName) => {
    this.setState({
      country_name: selectedCountryName,
      news: null,
      isLoading: true
    }, () => {
      this.getCountryByName()
    })
  }

  getCountryByName () {
    axios.get('https://restcountries.eu/rest/v2/name/' + this.state.country_name)
    .then((response) => {
      this.setState({country_code: response.data[0].alpha2Code}, () => {
        this.getNews()
      })
    })
    .catch((error) => {
      alert('Couldn\'t understand country.')
      this.setState({isLoading: false})
    })
  }

  getNews () {
    const { country_code } = this.state
    axios.get('https://newsapi.org/v2/top-headlines?country=' + country_code + '&apiKey=a5e1edfa15894f9584c5d6e1d305851e')
    .then((response) => {
      const formattedNews = response.data.articles.map((article, index) => {
        return {
          id: index,
          title: article.title,
          author: article.author,
          image: article.urlToImage,
          url: article.url,
          source: article.source.name,
          date: article.publishedAt
        }
      })
      this.setState({
        news: formattedNews,
        isLoading: false
      })
    })
    .catch((error) => {
      this.setState({
        hasError: true,
        isLoading: false
      })
    })
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
      <div className={styles.News}>
        <form onSubmit={(e) => e.preventDefault()}>
          <AutoCompleteInput
            items={this.state.country_names_list}
            onSelect={this.onAutoCompleteInputSelectChanged}
            width_limit="100px"
            placeholder="Type a Country"/>
        </form>
        {news}
      </div>
    )
  }
}

export default News
