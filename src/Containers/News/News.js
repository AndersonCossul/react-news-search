import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/actions'
import AutoCompleteInput from '../../Components/IO/AutoCompleteInput'
import Cards from '../../Components/Cards/Cards'
import styles from './News.css'

class News extends Component {
  state = {
    news: null,
    hasError: false,
    isLoading: false
  }

  getNews () {
    // const { country_code } = this.state
    // axios.get('https://newsapi.org/v2/top-headlines?country=' + country_code + '&apiKey=a5e1edfa15894f9584c5d6e1d305851e')
    // .then((response) => {
    //   const formattedNews = response.data.articles.map((article, index) => {
    //     return {
    //       id: index,
    //       title: article.title,
    //       author: article.author,
    //       image: article.urlToImage,
    //       url: article.url,
    //       source: article.source.name,
    //       date: article.publishedAt
    //     }
    //   })
    //   this.setState({
    //     news: formattedNews,
    //     isLoading: false
    //   })
    // })
    // .catch((error) => {
    //   this.setState({
    //     hasError: true,
    //     isLoading: false
    //   })
    // })
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
            onSelect={this.props.setSelectedAutocompleteCountry}
            placeholder="Type a Country"/>
        </form>
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
    setSelectedAutocompleteCountry: (country) => dispatch(actions.setSelectedAutocompleteCountry(country))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
