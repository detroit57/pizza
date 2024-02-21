import { Box } from "@chakra-ui/react";
import {
  Bag,
  Category,
  Chart,
  Note1,
  People,
  Setting,
  Setting2,
  ShoppingBag,
  Wallet,
} from "iconsax-react";
import React from "react";
import NavLinkCompo from "./NavLinkCompo";

const LeftSideBar = () => {
  return (
    <Box pos={"fixed"} p={5} top={20}>
      <NavLinkCompo
        name={"Dashboard"}
        link={"/dashboard"}
        icon={<Category variant="Bold" size={25} color="#000" />}
      />
      <NavLinkCompo
        link={"/products"}
        name={"Products"}
        icon={<Note1 variant="Bold" size={25} color="#000" />}
      />
      <NavLinkCompo
        link={"/orders"}
        name={"Orders"}
        icon={<ShoppingBag variant="Bold" size={25} color="#000" />}
      />
      <NavLinkCompo
        name={"Analysis"}
        icon={<Chart variant="Bold" size={25} color="#000" />}
      />
      <NavLinkCompo
        name={"Users"}
        icon={<People variant="Bold" size={25} color="#000" />}
      />
      <NavLinkCompo
        name={"Wallet"}
        icon={<Wallet variant="Bold" size={25} color="#000" />}
      />
      <NavLinkCompo
        name={"Settings"}
        icon={<Setting2 variant="Bold" size={25} color="#000" />}
      />
    </Box>
  );
};

export default LeftSideBar;
