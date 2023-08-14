import { styled } from "styled-components";

import React from 'react'
import { accessUrl } from "./spotify";

function Login() {
  return (
    <Container>
                <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </Container>
  )
}

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: black;

    img {
        width: 100%;
        height: 100%;
    }

    a {
        padding: 20px;
        background-color: #1db954;
        border-radius: 99px;
        font-weight: 800;
        color: white;
        text-decoration: none;
        
    }
`

export default Login