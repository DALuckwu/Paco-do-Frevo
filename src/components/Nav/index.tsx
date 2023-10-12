import React from 'react'
import { DefaultButton, Item, List, Logo, NavBar, NavImage, Options, RegisterButton } from './style'
import PageSymbol from "../../assets/logo-paco.png"
const Nav = () => {
    return (
        <NavBar>
            <NavImage>
                <Logo src={PageSymbol} />
            </NavImage>
            <Options>
                <List>
                    <Item>Home</Item>
                    <Item>Cadastrar agremiação</Item>
                    <Item>Dashboard</Item>
                </List>
            </Options>
             <RegisterButton>
                <DefaultButton>login</DefaultButton>
             </RegisterButton>
        </NavBar>
    )
}

export default Nav