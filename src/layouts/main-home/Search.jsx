import { Button, Flex, Input } from "@chakra-ui/react";
import { SearchNormal1 } from "iconsax-react";
import React from "react";

const Search = () => {
  return (
    <Flex
      alignItems={"center"}
      gap={3}
      display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
    >
      <Flex alignItems={"center"} borderRadius={10} bg={"#fff"} boxShadow={"0px 0px 10px #ddd"} px={2} py={1}>
        {/* <SearchNormal1 size={30} color="#000" /> */}
        <Input
          color={"#000"}
          placeholder={"Search...."}
          border={0}
          width={500}
        />
      </Flex>
      <Button
        py={6}
        width={120}
        _hover={"none"}
        bg={"#620997"}
        color={"#fff"}
      >
        Search
      </Button>
    </Flex>
  );
};

export default Search;
