import React from 'react'
import { styled } from 'styled-components'

function Footer() {
  return (
    <Container>
        <h1>Footer</h1>
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    height: 65px;
    width: 100%;
    background-color: #282828;
    padding: 20px;

`

export default Footer