const URL = 'https://newsapi.org/v2';
const API_KEY = '68f7fb59d89447ca8b8d9788122c4468';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    // console.log(this);
    const options = {
      headers: {
        Authorization: API_KEY,
      },
    };
    const url = `${URL}/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(({ articles }) => {
        this.incrementPage();

        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
