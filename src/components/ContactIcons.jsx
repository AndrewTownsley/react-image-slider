import React from 'react'
import { AiOutlineInstagram,  AiOutlineTwitter } from 'react-icons/ai'
import { BsFillPhoneFill, BsSnapchat, BsFillChatFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'


const ContactIcons = () => {
  return (
    <div className='contact-icons'>
        <a href="#0"><AiOutlineInstagram/></a>
        <a href="#0"><AiOutlineTwitter/></a>
        <a href="#0"><BsSnapchat/></a>
        <a href="#0"><BsFillChatFill/></a>
        <a href="#0"><BsFillPhoneFill/></a>
        <a href="#0"><IoMdMail/></a>
    </div>
  )
}

export default ContactIcons;