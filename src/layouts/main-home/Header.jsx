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
  Text,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Cart from "./Cart";
import CartItem from "./CartItem";
import { SearchNormal, Trash } from "iconsax-react";
import { Link } from "react-router-dom";
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
          <Link to={"/profile"}>
            <Avatar
              name="Ryan Florence"
              src=""
            />
          </Link>
        </Flex>
        <>
          <Drawer
            width={"100vw"}
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent width={"100vw"} zIndex={999999999}>
              <Flex
                justifyContent={"space-between"}
                boxShadow={"0px 0px 10px #ddd"}
                py={3}
                px={3}
                alignItems={"center"}
              >
                <Logo />
                <Flex alignItems={"center"} gap={4}>
                  <Flex gap={2} alignItems={"center"}>
                    <Text>Total (50)</Text>
                    <Trash variant="Bold" color="red" />
                  </Flex>
                  <CloseButton onClick={onClose} />
                </Flex>
              </Flex>
              <Box pt={5} overflowY={"scroll"} px={5} mb={20}>
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
                <Link to={"/checkout"}>
                  <Button
                    width={"100%"}
                    _hover={"none"}
                    height={50}
                    bg={"#620997"}
                    color={"#fff"}
                  >
                    Checkout
                  </Button>
                </Link>
              </Box>
            </DrawerContent>
          </Drawer>
        </>
      </Flex>
    </Box>
  );
};

export default Header;
