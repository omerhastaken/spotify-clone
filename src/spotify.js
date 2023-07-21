export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirecUri = "http://localhost:3000/";
const clıentId = "ae3ac12e79c54410a21689290493dcd7";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl =
  '${authEndpoint}?client_id=${dlientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true';
