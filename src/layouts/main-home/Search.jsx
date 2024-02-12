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
      <Flex alignItems={"center"} borderRadius={10} bg={"#ddd"} px={2} py={1}>
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
        bg={"linear-gradient(45deg,tomato,darkorange)"}
        color={"#fff"}
      >
        Search
      </Button>
    </Flex>
  );
};

export default Search;
