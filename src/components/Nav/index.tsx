import React from 'react'
import { DefaultButton, Item, List, Logo, NavBar, NavImage, Options, RegisterButton } from './style'
import PageSymbol from "../../assets/logo-paco.png"
import { Button } from '../Button/style'

/**
 * Falta documentação
 * @returns 
 */
const Nav = () => {
    return (
        <NavBar>
            <NavImage>
                <Logo src={PageSymbol} />
            </NavImage>
            <Options>
                <List>
                    {/* Os itens da navbar precisam sem importados do button, com o padrão large */}
                    <Item>Home</Item>
                    <Item>Cadastrar agremiação</Item>
                    <Item>Dashboard</Item>
                </List>
            </Options>
            {/* Também deve seguir o padrão de botão */}
             <RegisterButton>
                {/* Não usar tamanho fixo no botão nem margin, o botão deve conter apenas padding */}
             <Button width={"185px"} height={"35px"} margin={"20px"} color={"#27962D"}>Login</Button>
             </RegisterButton>
        </NavBar>
    )
}

export default Nav