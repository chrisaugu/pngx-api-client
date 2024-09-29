import { convertXML } from "simple-xml-to-json";

export default async function handler(req, res) {
    fetch('https://www.pngx.com.pg/feed/',{mode: 'cors'})
    .then(response => response.text())
    .then(data => convertXML(data))
    .then(data => {
        res.status(200).json(data)
    })
    .catch(e => {
        res.status(500).json({ statusCode: 500, message: e.message })
    })
}

function getRssFeed(feed) {
    fetch(feed)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("item");
            let html = ``;
            html += `<h2>${data.querySelector("title").innerHTML}</h2>`;
            html += `<p>${data.querySelector("description").innerHTML}</p>`;
            html += `<div class="feeds">`;
            items.forEach(el => {
                html += `
        <article>
          <h3>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("title").innerHTML}
            </a>
          </h3>
        </article>
      `;
            });
            html += `</div>`;
            document.getElementById('content').insertAdjacentHTML("beforeend", html);
        });
}

function getFeeds() {
    let feeds = [];
    const database = firebase.firestore().collection('rssfeed');
    database.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            feeds.push({
                id: doc.id,
                url: doc.data().url
            });
        });
        return feeds;
    }).then(function (feeds) {
        displayFeeds(feeds);
    });
}

function displayFeeds(feeds) {
    feeds.forEach(feed => { getRssFeed(feed.url); });
}