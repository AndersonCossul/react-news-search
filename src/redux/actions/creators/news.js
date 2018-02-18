import * as actions from '../types'
import axios from 'axios'

export const fetchNewsStart = () => {
  return {
    type: actions.FETCH_NEWS_START
  }
}

export const fetchNewsCall = (countryCode) => {
  return dispatch => {
    axios.get('https://newsapi.org/v2/top-headlines?country=' + countryCode + '&apiKey=a5e1edfa15894f9584c5d6e1d305851e')
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
        dispatch(fetchNewsSuccess(formattedNews))
      })
      .catch((error) => {
        dispatch(fetchNewsFail(error))
      })
  }
}

export const fetchNewsSuccess = (news) => {
  return {
    type: actions.FETCH_NEWS_SUCCESS,
    news: news
  }
}

export const fetchNewsFail = (error) => {
  return {
    type: actions.FETCH_NEWS_FAIL,
    error: error
  }
}