import React from 'react'
import { styled } from 'styled-components'
import Header from './Header'
import { DataLayerValue } from './DataLayer'
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import "./Body.css"

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = DataLayerValue();
  return (
    <Container>
        <Header spotify={spotify} />
        <BodyInfo>
          <img src={discover_weekly?.images[0].url}
           alt='' />
            <InfoText>
              <strong>PLAYLIST</strong>
              <h2>Discover Weekly</h2>
              <p>{discover_weekly?.description}</p>
            </InfoText>
        </BodyInfo>

        <Songs>
          <SongIcons>
            <Shuffle>
             <PlayCircleFilled />
            </Shuffle>
            <Favorite fontSize='large' />
            <MoreHoriz />
          </SongIcons>
        </Songs>

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

const BodyInfo = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  img {
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }

`

const InfoText = styled.div`
  flex: 1;

  h2 {
    font-size: 48px;
    margin-bottom: 10px;

  }

  p {
    font-size: 14px;

  }
`

const Songs = styled.div`
`

const SongIcons = styled.div`
    display: flex;
    align-items: center;
`

const Shuffle = styled.div``

export default Body