import { styled } from 'styled-components';
import './App.css';
import Login from './Login';
import { useEffect, useState } from 'react';
import { getTokenFromResponse } from './spotify';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { DataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {
const [{ user, token }, dispatch] = DataLayerValue();

useEffect(() => {
  const hash = getTokenFromResponse();
  window.location.hash = "";

  const _token = hash.access_token;

  if (_token) {

    dispatch({
      type: "SET_TOKEN",
      token: _token,
    })


    spotify.setAccessToken(_token)

    spotify.getMe().then(user => {
      dispatch({
        type: 'SET_USER',
        user: user
      })
    })

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      })
    })

  }
  console.log(user);
  console.log(token);

  console.log('I HAVE A TOKEN>>>', token)
})

  return (
    <div className="App">

      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  );
}



export default App;
