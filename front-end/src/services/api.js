export const api = {
  // Base Url
  baseUrl: "http://localhost:3001",

  // Endpoints
  readAllGames: () => `${api.baseUrl}/games`,

  // Login
  loginUrl: () => `${api.baseUrl}/login`,

  // Requisições

  // Get
  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),

  // Post
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(body),
    }),
};
