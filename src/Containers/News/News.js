import React, { Component } from 'react'
import axios from 'axios'
import Cards from '../../Components/Cards/Cards'
import styles from './News.css'

class News extends Component {
  state = {
    news: [],
    hasError: false,
    country: null,
    search_query: '',
    isLoading: false
  }

  handleOnChange = (e) => {
    this.setState({search_query: e.target.value})
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.setState({isLoading: true})
    this.getCountryByName()
  }

  getCountryByName () {
    axios.get('https://restcountries.eu/rest/v2/name/' + this.state.search_query)
      .then((response) => {
        this.setState({country: response.data[0].alpha2Code}, () => {
          this.getNews()
        })
      })
      .catch((error) => {
        alert('Couldn\'t understand country.')
      })
  }

  getNews () {
    const { country } = this.state
    axios.get('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=a5e1edfa15894f9584c5d6e1d305851e')
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
        this.setState({news: formattedNews})
      })
      .catch((error) => {
        this.setState({hasError: true})
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

    if (this.state.news.length) {
      news = <Cards data={this.state.news} />
    }

    return (
      <div className={styles.News}>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input
              type="text"
              name="search_query"
              onChange={this.handleOnChange.bind(this)}
              placeholder="Type a Country"/>
        </form>
        {news}
      </div>
    )
  }
}

export default News
