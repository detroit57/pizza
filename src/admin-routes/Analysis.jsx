import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import { ArrowCircleDown, SearchFavorite1 } from "iconsax-react";

const Analysis = () => {
  return (
    <Box>
      <Header />
      <LeftSideBar />
      <Box pl={250} pt={75}>
        <Heading>Product Analysis</Heading>
        <Flex gap={5} py={5}>
          <Input placeholder="Search for Product" width={700} />
          <Menu>
            <MenuButton
              colorScheme="red"
              as={Button}
              rightIcon={<ArrowCircleDown />}
            >
              Category
            </MenuButton>
            <MenuList>
              <MenuItem>Rice</MenuItem>
              <MenuItem>Swallow</MenuItem>
              <MenuItem>Spaghetti</MenuItem>
              <MenuItem>Drinks</MenuItem>
              <MenuItem>Snacks</MenuItem>
            </MenuList>
          </Menu>
          <Button colorScheme="green" leftIcon={<SearchFavorite1 />}>
            Search
          </Button>
        </Flex>
        <Text fontSize={50} pb={5} fontWeight={800}>
          Total : ₦ 5000000
        </Text>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>USERNAME</Th>
                <Th>EMAIL</Th>
                <Th>PRODUCT</Th>
                <Th>QUANTITY</Th>
                <Th>PRICE</Th>
                <Th>TOTAL</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>areegbedavid</Td>
                <Td>areegbedavid@gmail.com</Td>
                <Td>Jollof Rice & Chicken</Td>
                <Td>2</Td>
                <Td>2500</Td>
                <Td>5000</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Analysis;
