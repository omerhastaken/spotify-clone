import React from 'react'
import "./Footer.css"
import { styled } from 'styled-components'
import { PlayCircleOutline } from '@mui/icons-material'
import { SkipPrevious } from '@mui/icons-material'
import { SkipNext } from '@mui/icons-material'
import { Shuffle } from '@mui/icons-material'
import { Repeat } from '@mui/icons-material'
import { PlaylistPlay } from '@mui/icons-material'
import { VolumeDown } from '@mui/icons-material'
import { Grid, Slider } from '@mui/material'

function Footer() {
  return (
    <Container>
        <LeftFooter>
          <img src='' alt='' />
          <SongInfo>
            <h4>Milyon</h4>
            <p>Sehinsah</p>
          </SongInfo>
        </LeftFooter>
        <CenterFooter>
          <Shuffle className='Green' />
          <SkipPrevious className='Icon' />
          <PlayCircleOutline className='Icon' fontSize='large' />
          <SkipNext className='Icon' />
          <Repeat className='Green'/>
        </CenterFooter>
        <RightFooter className='right'>
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlay />
            </Grid>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </RightFooter>
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    bottom: 0;
    height: 65px;
    width: 97%;
    background-color: #282828;
    padding: 20px;
    display: flex;
    justify-content: space-between;

`

const LeftFooter = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: white;
  width: 300px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 20px;
    object-fit: contain;

  }

  h4{
    margin-bottom: 5px;
  }

  p{
    font-size: 12px;
  }
`

const CenterFooter = styled.div`
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;

`

const RightFooter = styled.div`
flex: 0.3;
display: flex;
justify-content: space-between;
align-items: center;
color: white;

`

const SongInfo = styled.div`
`


export default Footer