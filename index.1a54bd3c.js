let e=e=>document.querySelector(e);const t=new class{fetchArticles(){const e={headers:{Authorization:"68f7fb59d89447ca8b8d9788122c4468"}},t=`https://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}`;return fetch(t,e).then((e=>e.json())).then((({articles:e})=>(this.incrementPage(),e)))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};function r(){t.fetchArticles().then((t=>{!function(t){console.dir(t);const r=t.map((e=>`<li>\n        <a href="${e.url}" target="_blank" rel="nopener noreferrer">\n            <article>\n                <img src=${e.urlToImage} alt='' width="480">\n                    <h2>${e.title}</h2>\n                    <p>Posted by: ${e.author}</p>\n                    <p>${e.description}</p>\n            </article>\n        </a>\n    </li>`)).join("");e(".articles").insertAdjacentHTML("beforeEnd",r)}(t)}))}e(".js-form-search").addEventListener("submit",(function(n){n.preventDefault(),t.query=n.currentTarget.elements.query.value,t.resetPage(),e(".articles").innerHTML="",r()})),e(".more").addEventListener("click",r);
//# sourceMappingURL=index.1a54bd3c.js.map