import React, { Component } from 'react'
import axios from 'axios'
import Cards from '../../Components/Cards/Cards'

class News extends Component {
  state = {
    news: null,
    hasError: false
  }

  getNews () {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=a5e1edfa15894f9584c5d6e1d305851e')
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

  componentDidMount () {
    this.getNews()
  }

  render () {
    let news = <p>Loading...</p>

    if (this.state.hasError) {
      news = <p>There was an error when getting the news.</p>
    }

    if (this.state.news) {
      if (this.state.news.length) {
        news = <Cards data={this.state.news} />
      } else {
        news = <p>No user was found!</p>
      }
    }

    return (
      <div>
        {news}
      </div>
    )
  }
}

export default News
