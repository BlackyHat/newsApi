!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var n={};function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e};var a="68f7fb59d89447ca8b8d9788122c4468",c=function(e){return document.querySelector(e)},o=new(function(){"use strict";function r(){e(t)(this,r),this.searchQuery="",this.page=1}return e(n)(r,[{key:"fetchArticles",value:function(){var e=this,t=new URLSearchParams({q:this.searchQuery,pageSize:15,page:this.page,sortBy:"relevancy",apiKey:a});console.log(this.date);var n={headers:{authorization:a}},r="".concat("https://newsapi.org/v2/everything?").concat(t);return fetch(r,n).then((function(e){if(!e.ok)throw new Error("status not ok");return e.json()})).then((function(t){var n=t.articles;return e.incrementPage(),n})).catch((function(e){return console.log(e)}))}},{key:"getDate",value:function(){var e=new Date;return console.log(e.toDateString()),e}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),r}());function i(){o.fetchArticles().then((function(e){!function(e){console.dir(e);var t=e.map((function(e){return'<li>\n        <a href="'.concat(e.url,'" target="_blank" rel="nopener noreferrer">\n            <article>\n                <img src=').concat(e.urlToImage," alt='' width=\"480\">\n                    <h2>").concat(e.title,"</h2>\n                    <p>Posted by: ").concat(e.author,"</p>\n                    <p>").concat(e.description,"</p>\n            </article>\n        </a>\n    </li>")})).join("");c(".articles").insertAdjacentHTML("beforeEnd",t)}(e)}))}c(".js-form-search").addEventListener("submit",(function(e){e.preventDefault(),o.query=e.currentTarget.elements.query.value,o.resetPage(),c(".articles").innerHTML="",i()})),c(".more").addEventListener("click",i)}();
//# sourceMappingURL=index.d8ef5b9d.js.map
