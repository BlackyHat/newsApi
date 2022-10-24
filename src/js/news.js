import NewsApiService from './news-service';
let getEl = selector => document.querySelector(selector);

const newsApiService = new NewsApiService();
getEl('.js-form-search').addEventListener('submit', onSearch);
getEl('.more').addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  clearArticlesContainer();
  fetchArticles();
}

// function onLoadMore() {
//   newsApiService.fetchArticles().then(appendArticlesMarkup);
// }

function fetchArticles() {
  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
  });
}

function appendArticlesMarkup(articles) {
  console.dir(articles);
  const markup = articles
    .map(
      el => `<li>
        <a href="${el.url}" target="_blank" rel="nopener noreferrer">
            <article>
                <img src=${el.urlToImage} alt='' width="480">
                    <h2>${el.title}</h2>
                    <p>Posted by: ${el.author}</p>
                    <p>${el.description}</p>
            </article>
        </a>
    </li>`,
    )
    .join('');
  getEl('.articles').insertAdjacentHTML('beforeEnd', markup);
}
function clearArticlesContainer() {
  getEl('.articles').innerHTML = '';
}
