import { Box } from '@chakra-ui/react'
import { Bag, Category, Note1, People, Setting, Setting2, ShoppingBag, Wallet } from 'iconsax-react'
import React from 'react'
import NavLinkCompo from './NavLinkCompo'

const LeftSideBar = () => {
  return (
    <Box pos={"fixed"}>
        <NavLinkCompo name={"Dashboard"} icon={<Category variant='Bold' size={25} color='#fff' />} />
        <NavLinkCompo name={"Dashboard"} icon={<Note1 variant='Bold' size={25} color='#fff' />} />
        <NavLinkCompo name={"Dashboard"} icon={<ShoppingBag variant='Bold' size={25} color='#fff' />} />
        <NavLinkCompo name={"Dashboard"} icon={<People variant='Bold' size={25} color='#fff' />} />
        <NavLinkCompo name={"Dashboard"} icon={<Wallet variant='Bold' size={25} color='#fff' />} />
        <NavLinkCompo name={"Dashboard"} icon={<Setting2 variant='Bold' size={25} color='#fff' />} />
    </Box>
  )
}

export default LeftSideBar