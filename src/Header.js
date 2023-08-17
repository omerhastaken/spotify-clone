import React from 'react'
import { styled } from 'styled-components'
import { Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { DataLayerValue } from './DataLayer'

function Header() {
    const [{ user }, dispatch] = DataLayerValue();
  return (
    <Container>
        <HeaderLeft>
            <Search />
            <input
            placeholder='Search for Artists, Songs, or Podcasts'
            type='text'
            />
        </HeaderLeft>

        <HeaderRight>
            <Avatar src={user?.images[0].url} alt={user?.display_name} />
            <h4>{user?.display_name}</h4>
        </HeaderRight>
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
     
`

const HeaderLeft = styled.div`
    background-color: white;
    color: gray;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 10px;
    flex: 0.5;
    min-width: 70px;


    input {
        border: none;
        width: 100%;
    }
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;

    h4{
        margin-left: 10px;
        
    }
`


export default Header