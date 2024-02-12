import {
  Avatar,
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import CartItem from "./CartItem";
import { SearchNormal } from "iconsax-react";
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box
      p={{ lg: 5, md: 4, sm: 3, base: 3 }}
      pos={"fixed"}
      backdropFilter={"blur(24px)"}
      className="col"
      zIndex={9}
      right={0}
      top={0}
      left={0}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Logo />
        <Search />
        <Flex alignItems={"center"} gap={5}>
          {/* <Box><SearchNormal size={35} variant="Bulk" color="#fff" /></Box> */}
          <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <Cart />
          </Box>
          <Avatar />
        </Flex>
        <>
          <Drawer
          
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent  width={"100vw"} zIndex={999999999}>
              <Flex justifyContent={"space-between"} boxShadow={"0px 0px 10px #ddd"} py={3} px={3} alignItems={"center"}>
                <Logo />
                <CloseButton onClick={onClose} />
              </Flex>
              <Box pt={5} overflowY={"scroll"} px={5}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </Box>
            </DrawerContent>
          </Drawer>
        </>
      </Flex>
    </Box>
  );
};

export default Header;
