export const api = {
  // Base Url
  baseUrl: "http://localhost:3002",

  // Endpoints
  readAllGames: () => `${api.baseUrl}/games`,

  // Requisições

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
