// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import sidebar from "../components/sidebar.js";
document.getElementById("sidebar").innerHTML = sidebar();

// console.log(ind, us, uk, ch, nz);

let showNewsIn = () => {
      //   event.preventDefault();
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;

      fetch(url)
            .then(function (res) {
                  return res.json();
            })
            .then(function (res) {
                  console.log(res.articles);
                  appendNews(res.articles);
            });
};

let showNewsUS = () => {
      //   event.preventDefault();
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`;

      fetch(url)
            .then(function (res) {
                  return res.json();
            })
            .then(function (res) {
                  appendNews(res.articles);
                  //   console.log(res.articles);
            });
};
let showNewsUK = () => {
      //   event.preventDefault();
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`;

      fetch(url)
            .then(function (res) {
                  return res.json();
            })
            .then(function (res) {
                  appendNews(res.articles);
                  //   console.log(res.articles);
            });
};
let showNewsCH = () => {
      //   event.preventDefault();
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`;

      fetch(url)
            .then(function (res) {
                  return res.json();
            })
            .then(function (res) {
                  appendNews(res.articles);
                  //   console.log(res.articles);
            });
};
let showNewsNZ = () => {
      //   event.preventDefault();
      let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`;

      fetch(url)
            .then(function (res) {
                  return res.json();
            })
            .then(function (res) {
                  appendNews(res.articles);
                  //   console.log(res.articles);
            });
};
showNewsIn();
document.getElementById("in").addEventListener("click", showNewsIn);
document.getElementById("us").addEventListener("click", showNewsUS);

document.getElementById("uk").addEventListener("click", showNewsUK);
document.getElementById("ch").addEventListener("click", showNewsCH);
document.getElementById("nz").addEventListener("click", showNewsNZ);

function appendNews(data) {
      document.getElementById("results").innerText = "";
      data.forEach(function (el) {
            let box = document.createElement("div");
            box.style.display = "flex";
            // box.style.border = "1px solid red";
            box.style.margin = "20px";

            let img = document.createElement("img");
            img.src = el.urlToImage;
            img.style.widows = "180px";
            img.style.height = "200px";

            let title = document.createElement("h4");
            title.innerText = el.title;
            title.style.cursor="pointer"

            let an = document.createElement("a");
            an.innerText = title;
            an.href = el.url;
            console.log(an)

            let p = document.createElement("p");
            p.innerText = el.description;

            let des = document.createElement("div");
            des.style.marginLeft="20px"
            des.append(title, p);
            // console.log(title,img,p);

            box.append(img, des);
            document.getElementById("results").append(box);
      });
}
let input = document.getElementById("search_input");
// console.log(query);
let searchNews = () => {
      document.getElementById("results").innerText = "";
      let query = input.value;
      console.log(query);
      //   event.preventDefault();
      let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;

      fetch(url)
            .then(function (res) {
                  return res.json();
            })
            .then(function (res) {
                  //   appendNews(res.articles);
                  console.log(res);
            });
};

input.addEventListener("keypress", searchNews);
