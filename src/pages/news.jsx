
import { Card, Text } from '@geist-ui/core';
import Layout from '@/components/Layout';
import useMyTheme from '@/hooks/useTheme';

export default function UsesPage() {
  // const [theme, setTheme] = useMyTheme();
  
  function formatDate(date) {
        const options = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        };
        
        return `${date.toLocaleDateString('en-US', options).split('/').join('.')}`;  // Return the formatted date
    }

    function processRssFeeds(feedUrls, callback) {
        // Fetch the contents of each RSS feed
        Promise.all(feedUrls.map(url => fetch(url)))
        .then(responses => Promise.all(responses.map(res => res.text())))
        .then(texts => texts.map(text => new DOMParser().parseFromString(text, 'text/xml')))
        .then(xmlDocs => xmlDocs.reduce((items, xmlDoc, i) => {  // Add an index to the reduce function
            // Extract the items from the XML document
            const xmlItems = xmlDoc.querySelectorAll('item');
            return items.concat([...xmlItems].map(item => ({
                title: item.querySelector('title').textContent,
                date: new Date(item.querySelector('pubDate').textContent),
                description: item.querySelector('description').textContent,
                feedUrl: feedUrls[i],  // Use the index to get the URL of the feed
            })));
        }, []))
        .then(items => {
            // Sort the items by their publication date
            items.sort((a, b) => b.date - a.date);
        
            // Call the callback function for each item
            items.forEach(item => callback(item.title, item.date, item.description, item.feedUrl));
        });
    }  
    

    const feedUrls = [
        'https://example.com/feed/',
        'https://example2.com/feed/',
    ];

    processRssFeeds(feedUrls, (title, date, description, feed) => {
        // Create a new div element
        const div = document.createElement('div');

        let columns = 3;
        let itemmargin = 25;

        console.log(feed);
        if (feed == 'https://example.com/feed/') {
            var feedName = 'Feed 1 element';
        }
        if (feed == 'https://example2.com/feed/') {
            var feedName = 'Feed 2 element';
        }

        // Set the inner HTML of the div to the title, date, description, and feed of the item
        div.className = "item";
        div.style.maxWidth = (document.getElementById('itemdiv').clientWidth / columns - itemmargin * 2) - 60 + "px";
        div.innerHTML = `
            <h2>${title}</h2>
            <p>${formatDate(date)}</p>
            <p>${description}</p>
            <p style="background-color: blue; color: white; display: inline; padding: 15px; margin: 10px;">${feedName}</p>
        `;

        // Append the div to the existing itemdiv element
        document.querySelector('#itemdiv').appendChild(div);
    });



  return (
    <Layout title={"Uses"}>

        <Text>This web application is built using:</Text>

        <Card >
            <Card.Content>
              <ul>
                <li>Nextjs</li>
                <li>Geist UI</li>
                <li>Styled-Components</li>
                <li>PNGX-API</li>
                <li>PNGX data</li>
                <li>Redux</li>
                <li>Axios</li>
                <li>Fetch</li>
              </ul>
            </Card.Content>
        </Card>

    </Layout>
  );
}
