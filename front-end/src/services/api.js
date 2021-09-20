export const api = {
  // Base Url
  baseUrl: "http://localhost:3001",

  // Endpoints

  // GET
  // Mostrar todos os jogos
  readAllGames: () => `${api.baseUrl}/games`,

  // Mostra os jogos a partir do id
  readGamesById: (id) => `${api.baseUrl}/games/${id}`,

  // Mostra todos os genêros
  readAllGenrers: () => `${api.baseUrl}/genrer`,

  // Mostra os genêros a partir do id
  readGenrersById: (id) => `${api.baseUrl}/genrer/${id}`,

  // POST
  // Cadastro
  registerUrl: () => `${api.baseUrl}/users`,

  // Login
  loginUrl: () => `${api.baseUrl}/login`,

  // Games
  registerGames: () => `${api.baseUrl}/games`,

  // Requisições

  // GET
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
