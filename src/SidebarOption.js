import React from 'react'
import { styled } from 'styled-components'
import "./SidebarOption.css";

function SidebarOption({ title, Icon }) {
  return (
    <Container>
        {Icon && <Icon className="SidebarOption__icons" />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p> }
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    color: grey;
    height: 40px;
    cursor: pointer;
    transition: 200ms color ease-in;
    align-items: center;

    p {
        margin-top: 10px;
        margin-left: 20px;
        font-size: 14px;
    }


    &:hover {
        color: white;

    }
`

export default SidebarOption