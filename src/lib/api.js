import axios from 'axios';

// const API_URL = "http://localhost:5000/api";
// const API_URL = "https://pngx-api.onrender.com/api";
const API_URL = "https://nuku-457caot7.b4a.run/api";

export default axios.create({
  "baseUrl": API_URL,
  "headers": {
    'Content-Type': 'application/json',
  },
  "withCredentials": true
});

// async function fetchAPI(url, options = { method: 'GET' }) {
//   const headers = { 
//     'Content-Type': 'application/json'
//   }

//   if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
//     headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
//   }
  
//   const res = await fetch(API_URL + url, options);

//   const json = await res.json();

//   if (json.errors) {
//     console.error(json.errors);
//     throw new Error('Failed to fetch API');
//   }
//   return json;
// }

// async function fetch2(query, { variables } = {}) {
//   fetchAPI("/stocks", {
//     method: 'POST',
//     body: JSON.stringify({
//       query,
//       variables,
//     })
//   })
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
