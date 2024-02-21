import { Avatar, Box, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import Logo from "../../components/Logo";
import { HambergerMenu, Notification } from "iconsax-react";

const Header = () => {
  return (
    <Box pos={"fixed"} left={0} right={0} bg={"#fff"} zIndex={9999}>
      <Flex justifyContent={"space-between"} p={2}>
        <Flex alignItems={"center"} gap={4}>
          <Logo />
          <IconButton icon={<HambergerMenu />} />
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <IconButton
            borderRadius={400}
            icon={<Notification size={40} color="darkorange" variant="Bold" />}
            bg={"none"}
            _hover={"none"}
          />
          <Avatar
            name="Admin Users"
            src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/394617381_10228641587416044_7399701632752763762_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFrncSr_i2ZA66HwhKxP2nmu2vCT-3Lmeq7a8JP7cuZ6l2jlNErtq_yxm-gu0SwPliIE9-oEsnxwQRM4IFtTD90&_nc_ohc=nyTS_2Jx_SwAX-BRQ1u&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDdCFBp9d4NrUuZd_hUCVa0ciWwzfK2h7t93_sZ5YTJGQ&oe=65D1131https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?w=740&t=st=1707312539~exp=1707313139~hmac=3c4f6c072136d471578e3b89de222cdfd047cca33109531701c8aff620280b1a"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
