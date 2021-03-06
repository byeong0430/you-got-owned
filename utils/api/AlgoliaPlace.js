import axios from 'axios';

export default class AlgoliaPlace {
  constructor() {
    this.urls = [
      'https://places-dsn.algolia.net/1/places/query'
    ];
    this.defaultParams = {
      language: 'en',
      hitsPerPage: 8,
      countries: ['us'] // Limit results only for the U.S.
    };
  }

  addParams = paramOjb => (
    { ...this.defaultParams, ...paramOjb }
  )

  getPlaces = async params => {
    let result = await axios.post(this.urls[0], this.addParams(params));
    return result.data.hits;
  }
}