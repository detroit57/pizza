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
import AddProduct from "./AddProduct";

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
      <AddProduct />
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
