import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { Link as Ln } from "react-router-dom";
import { HambergerMenu } from "iconsax-react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box
      boxShadow={"0px 0px 10px 	#ddd"}
      pos={"fixed"}
      top={0}
      bg={"#fff"}
      left={0}
      right={0}
      zIndex={999}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"} p={5}>
        <Logo />
        <Flex
          gap={10}
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
        >
          <Text as={Link} href="#">
            Home
          </Text>
          <Text as={Link} href="#about">
            About
          </Text>
          <Text as={Link} href="#events">
            Events
          </Text>
          <Text as={Link} href="#contacts">
            Contacts
          </Text>
          <Text as={Link} href="#categories">
            Categories
          </Text>
        </Flex>
        <Link to={"/login"}>
          <Button
            bg={"#620997"}
            display={{ lg: "block", md: "block", sm: "none", base: "none" }}
            color={"#fff"}
            borderRadius={40}
            width={150}
            _hover={"none"}
          >
            Login
          </Button>
        </Link>
        <Box
          ref={btnRef}
          onClick={onOpen}
          display={{ lg: "none", md: "none", sm: "block", base: "block" }}
        >
          <HambergerMenu size={40} />
        </Box>
      </Flex>
      <>
        <Drawer
          width={"100vw"}
          isOpen={isOpen}
          placement="right"
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
              <CloseButton onClick={onClose} />
            </Flex>
            <Box pt={5} px={5} mb={20} lineHeight={10}>
              <Text as={Link} href="#">
                Home
              </Text>
              <Text as={Link} href="#about">
                About
              </Text>
              <Text as={Link} href="#events">
                Events
              </Text>
              <Text as={Link} href="#contacts">
                Contacts
              </Text>
              <Text as={Link} href="#categories">
                Categories
              </Text>
              <Ln to={"/login"}>
                <Text>Login</Text>
              </Ln>
            </Box>
          </DrawerContent>
        </Drawer>
      </>
    </Box>
  );
};

export default Header;
