import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";

const Orders = () => {
  return (
    <Box>
      <Header />
      <LeftSideBar />
      <Box pl={250} pt={65}>
        <Heading fontSize={50}>Orders</Heading>
        <Box pt={10}>
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
                  <Th>STATUS</Th>
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
                  <Td>
                    <Text
                      p={3}
                      bg={"orange"}
                      textAlign={"center"}
                      borderRadius={40}
                      color={"#fff"}
                    >
                      Pending
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>areegbedavid</Td>
                  <Td>areegbedavid@gmail.com</Td>
                  <Td>Jollof Rice & Chicken</Td>
                  <Td>2</Td>
                  <Td>2500</Td>
                  <Td>
                    <Text
                      p={3}
                      bg={"green"}
                      color={"#fff"}
                      textAlign={"center"}
                      borderRadius={40}
                    >
                      Success
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>areegbedavid</Td>
                  <Td>areegbedavid@gmail.com</Td>
                  <Td>Jollof Rice & Chicken</Td>
                  <Td>2</Td>
                  <Td>2500</Td>
                  <Td>
                    <Text
                      p={3}
                      bg={"orange"}
                      textAlign={"center"}
                      borderRadius={40}
                      color={"#fff"}
                    >
                      Pending
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>areegbedavid</Td>
                  <Td>areegbedavid@gmail.com</Td>
                  <Td>Jollof Rice & Chicken</Td>
                  <Td>2</Td>
                  <Td>2500</Td>
                  <Td>
                    <Text
                      p={3}
                      bg={"green"}
                      color={"#fff"}
                      textAlign={"center"}
                      borderRadius={40}
                    >
                      Success
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>areegbedavid</Td>
                  <Td>areegbedavid@gmail.com</Td>
                  <Td>Jollof Rice & Chicken</Td>
                  <Td>2</Td>
                  <Td>2500</Td>
                  <Td>
                    <Text
                      p={3}
                      bg={"orange"}
                      textAlign={"center"}
                      borderRadius={40}
                      color={"#fff"}
                    >
                      Pending
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>areegbedavid</Td>
                  <Td>areegbedavid@gmail.com</Td>
                  <Td>Jollof Rice & Chicken</Td>
                  <Td>2</Td>
                  <Td>2500</Td>
                  <Td>
                    <Text
                      p={3}
                      bg={"green"}
                      color={"#fff"}
                      textAlign={"center"}
                      borderRadius={40}
                    >
                      Success
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>areegbedavid</Td>
                  <Td>areegbedavid@gmail.com</Td>
                  <Td>Jollof Rice & Chicken</Td>
                  <Td>2</Td>
                  <Td>2500</Td>
                  <Td>
                    <Text
                      p={3}
                      bg={"orange"}
                      textAlign={"center"}
                      borderRadius={40}
                      color={"#fff"}
                    >
                      Pending
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>areegbedavid</Td>
                  <Td>areegbedavid@gmail.com</Td>
                  <Td>Jollof Rice & Chicken</Td>
                  <Td>2</Td>
                  <Td>2500</Td>
                  <Td>
                    <Text
                      p={3}
                      bg={"green"}
                      color={"#fff"}
                      textAlign={"center"}
                      borderRadius={40}
                    >
                      Success
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>areegbedavid</Td>
                  <Td>areegbedavid@gmail.com</Td>
                  <Td>Jollof Rice & Chicken</Td>
                  <Td>2</Td>
                  <Td>2500</Td>
                  <Td>
                    <Text
                      p={3}
                      bg={"orange"}
                      textAlign={"center"}
                      borderRadius={40}
                      color={"#fff"}
                    >
                      Pending
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>1</Td>
                  <Td>areegbedavid</Td>
                  <Td>areegbedavid@gmail.com</Td>
                  <Td>Jollof Rice & Chicken</Td>
                  <Td>2</Td>
                  <Td>2500</Td>
                  <Td>
                    <Text
                      p={3}
                      bg={"green"}
                      color={"#fff"}
                      textAlign={"center"}
                      borderRadius={40}
                    >
                      Success
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Orders;
