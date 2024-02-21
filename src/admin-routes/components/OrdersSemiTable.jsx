import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const OrdersSemiTable = () => {
  return (
    <Box mt={5}>
      <Heading pb={5} fontSize={40}>
        Orders
      </Heading>
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
              <Td>Pending</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>areegbedavid</Td>
              <Td>areegbedavid@gmail.com</Td>
              <Td>Jollof Rice & Chicken</Td>
              <Td>2</Td>
              <Td>2500</Td>
              <Td>Pending</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>areegbedavid</Td>
              <Td>areegbedavid@gmail.com</Td>
              <Td>Jollof Rice & Chicken</Td>
              <Td>2</Td>
              <Td>2500</Td>
              <Td>Pending</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>areegbedavid</Td>
              <Td>areegbedavid@gmail.com</Td>
              <Td>Jollof Rice & Chicken</Td>
              <Td>2</Td>
              <Td>2500</Td>
              <Td>Pending</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrdersSemiTable;
