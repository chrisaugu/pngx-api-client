import axios from 'axios';

export default axios.create({
	// "baseUrl": "http://localhost:5000/api"
	// baseUrl: "http://pngx-api.cleverapps.io/api"
  "baseUrl": "https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api"
});

// const API_URL = "https://app-6a8549f8-c753-46a7-a88d-e54678c74dd9.cleverapps.io/api";
// const API_URL = "http://localhost:5000/api";

// async function fetchAPI(url) {
//   const headers = { 'Content-Type': 'application/json' }

//   const res = await fetch(API_URL+url, {
//     method: 'GET',
//     headers
//   })

//   const json = await res.json()
//   if (json.errors) {
//     console.error(json.errors)
//     throw new Error('Failed to fetch API')
//   }
//   return json;
// }

// export default fetchAPI;