import { Avatar, Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import Logo from "../../components/Logo";
import { HambergerMenu, Notification } from "iconsax-react";

const Header = () => {
  return (
    <Box pos={"fixed"} left={0} right={0} bg={"#fff"} zIndex={9999}>
      <Flex justifyContent={"space-between"} p={2} boxShadow={"0px 0px 10px #eee"}>
        <Flex alignItems={"center"} gap={4}>
          <Logo />
          <IconButton icon={<HambergerMenu />} />
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <IconButton
            borderRadius={400}
            icon={<Notification size={50} variant="Bold" />}
            bg={"none"}
            _hover={"none"}
          />
          <Avatar
            name="Admin Users"
            src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?w=740&t=st=1707313441~exp=1707314041~hmac=f4fdede70854ae687e6b6ac43bf6c3c91664f4bc8d35d4ff2ac5cc20adfbe1cd"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
