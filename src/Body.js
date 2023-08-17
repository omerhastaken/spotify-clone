import React from 'react'
import { styled } from 'styled-components'
import Header from './Header'

function Body({ spotify }) {
  return (
    <Container>
        <Header spotify={spotify} />
    </Container>
  )
}

const Container = styled.div`
    flex: 0.8;
    background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
    height: 100vh;
    color: white;
    padding: 30px;


`


export default Body