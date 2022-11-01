const URL = 'https://newsapi.org/v2/everything?';
const API_KEY = '68f7fb59d89447ca8b8d9788122c4468';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    // this.date = this.getDate();
  }

  fetchArticles() {
    const searchParams = new URLSearchParams({
      apiKey: API_KEY,
      q: this.searchQuery,
      pageSize: 15,
      page: this.page,
      sortBy: 'relevancy',
      // from: this.date,
    });
    console.log(this.date);

    // const options = {
    //   headers: {
    //     'x-api-key': API_KEY,
    //   },
    // };

    const url = `${URL}${searchParams}`;
    // const url = `${URL}q=${this.searchQuery}&searchIn=title,content&pageSize=5&page=${this.page}`;
    // const url = `${URL}/top-headlines?country=ua&${this.searchQuery}&pageSize=5&page=${this.page}`;

    return fetch(
      url,
      // , options
    )
      .then(r => {
        if (!r.ok) {
          throw new Error('status not ok');
        }
        return r.json();
      })
      .then(({ articles }) => {
        this.incrementPage();

        return articles;
      })
      .catch(e => console.log(e));
  }

  getDate() {
    const date = new Date();
    console.log(date.toDateString());
    return date;
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
