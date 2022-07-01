import axios from 'axios';
// import vercelFetch from '@vercel/fetch';

// export default vercelFetch();

// const API_URL = "http://localhost:5000/api";
// const STOCKS_API_URL = `https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api`;
const STOCKS_API_URL = "https://pngx-api.cleverapps.io/api";

export default axios.create({
  "baseUrl": STOCKS_API_URL,
  "headers": {
    'Content-Type': 'application/json',
  },
  "withCredentials": true, // to send cookie
});

async function fetchAPI(url) {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(API_URL+url, {
    "method": 'GET',
    headers
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json;
}

// async function fetch2(query, { variables } = {}) {
//   const headers = { 'Content-Type': 'application/json' }

//   if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
//     headers[
//       'Authorization'
//     ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
//   }

//   const res = await fetch(API_URL, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//   })

//   const json = await res.json()
//   if (json.errors) {
//     console.error(json.errors)
//     throw new Error('Failed to fetch API')
//   }
//   return json.data
// }

// export async function getAllPostsWithSlug() {
//   const data = await fetch2(`
//     {
//       posts(first: 10000) {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)
//   return data?.posts
// }


let todos = [];
const delay = () => new Promise((res) => setTimeout(() => res(), 800));

export async function getTodos() {
  await delay();
  return todos;
}

export async function addTodo(todo) {
  await delay();
  if (Math.random() < 0.5) throw new Error("Failed to add new item!");
  todos = [...todos, todo];
  return todos;
}
