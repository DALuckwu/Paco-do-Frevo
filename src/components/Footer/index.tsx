import React from 'react'
import { Contact, FooterPage, Icon } from './style'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { BsSpotify } from "react-icons/bs"
const Footer = () => {
  return (
     <FooterPage>
        <Contact>
        <Icon> <BsInstagram /> </Icon>
        <Icon> <BsFacebook /> </Icon>
        <Icon> <BsYoutube /> </Icon>
        <Icon> < BsSpotify  /> </Icon>
        </Contact>
     </FooterPage>
  )
}

export default Footer