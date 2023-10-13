import React from 'react'
import { DefaultButton, Item, List, Logo, NavBar, NavImage, Options, RegisterButton } from './style'
import PageSymbol from "../../assets/logo-paco.png"
import { Button } from '../Button/style'
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
             <Button width={"185px"} height={"35px"} margin={"20px"} color={"#27962D"}>Login</Button>
             </RegisterButton>
        </NavBar>
    )
}

export default Nav