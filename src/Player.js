import React from 'react'
import { Styled, styled } from 'styled-components'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer';

function Player({ spotify }) {
  return (
    <Container>
        <PlayerBody>
          <Sidebar />
          <Body spotify={spotify}/>
        </PlayerBody>
        <Footer />
    </Container>
  )
}

const Container = styled.div`

`
const PlayerBody = styled.div`
  display: flex;
`

export default Player