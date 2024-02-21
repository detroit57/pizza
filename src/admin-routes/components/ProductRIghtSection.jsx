import {
  Box,
  Flex,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Grid,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { AddCircle, ArrowCircleDown } from "iconsax-react";
import React from "react";
import Product from "./Product";

const ProductRIghtSection = () => {
  return (
    <Box pl={250} pt={65}>
      <Heading>Products Grid</Heading>
      <Flex justifyContent={"space-between"} gap={10} pr={10} py={5}>
        <Input placeholder="Search..." />
        <Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ArrowCircleDown />}>
              Category
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Flex
        alignItems={"center"}
        gap={5}
        boxShadow={"0px 0px 2000px #000"}
        p={5}
        position={"fixed"}
        bg={"#fff"}
        bottom={10}
        right={10}
        zIndex={99999999}
        borderRadius={30}
        width={"fit-content"}
      >
        <IconButton icon={<AddCircle size={50} variant="Bold" />} bg={"none"} />
        <Text fontSize={20}>Add Product</Text>
      </Flex>
      <Grid gridTemplateColumns={"1fr 1fr 1fr"} py={10} pr={10} gridGap={10}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Grid>
    </Box>
  );
};

export default ProductRIghtSection;
