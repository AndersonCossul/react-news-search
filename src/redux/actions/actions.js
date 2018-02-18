import { fetchNewsStart, fetchNewsCall } from './creators/news'

// single actions
export { updateSelectedCountry } from './creators/countries'

// multi actions
export const fetchNews = (country) => {
  return [
    fetchNewsStart(country),
    fetchNewsCall(country.code)
  ]
}