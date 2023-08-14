import React from 'react'
import { styled } from 'styled-components'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { DataLayerValue } from "./DataLayer";



function Sidebar() {
  const [{ playlists }, dispatch] = DataLayerValue();
  console.log(playlists);
  return (
    <Container>
            <Logo>
              <img src='https://www.linkpicture.com/q/spotify2019-830x350-1.jpg' />
            </Logo>
            <SidebarOption Icon={HomeIcon}  title="Home" />
            <SidebarOption Icon={SearchIcon}  title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <Title>
              <strong>PLAYLISTS</strong>
            </Title>
            <hr />
           {playlists?.items?.map((playlist) => (
            <SidebarOption title={playlist.name} />
           ))}
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    flex: 0.2;
    background-color: #040404;
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    min-width: 230px;

    hr {
      border: 1px solid #282828;
      width: 90%;
      margin: 10px auto;
    }
    
`

const Logo = styled.div`
  margin-right: auto;
  object-fit: contain;
  height: 70px;
  padding: 10px;
`

const Title = styled.div`
  margin-left: 10px;
  padding: 5px;
  font-size: 12px;

`

export default Sidebar