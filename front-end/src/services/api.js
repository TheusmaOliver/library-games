export const api = {
  // Base Url
  baseUrl: "http://localhost:3001",

  // Endpoints

  // GET

  // Mostra o usuario atual
  readCurrentUser: () => `${api.baseUrl}/users/currentUser`,

  // Mostra o usuario de acordo com o id
  readUserById: (id) => `${api.baseUrl}/users/${id}`,

  // Motra todos os profiles

  // Mostra o profile de acordo com o id
  readProfileById: (id) => `${api.baseUrl}/profiles/${id}`,

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

  // Auth Header
  authHeader: () => ({
    Authorization: "Bearer " + localStorage.getItem("JWT"),
  }),

  // Requisições

  // GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers({ ...api.authHeader() }) : undefined,
    }),

  // Post
  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(body),
    }),

  // Patch
  buildApiPatchRequest: (url, body) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("JWT"),
      }),
      body: JSON.stringify(body),
    }),
};
