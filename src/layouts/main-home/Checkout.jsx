import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import React from "react";

const Checkout = () => {
  return (
    <Box py={5}>
      <Flex
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        justifyContent={"center"}
      >
        <Box>
          <Box p={10} bg={"#fff"} borderRadius={10}>
            <Heading>Delivery Information</Heading>
            <Box>
              <Flex
                gap={{ lg: 10, md: 10, sm: 5, base: 5 }}
                flexWrap={"wrap"}
                mt={5}
              >
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>Mobile Number</FormLabel>
                  <Input />
                </FormControl>
              </Flex>
              <Flex
                gap={{ lg: 10, md: 10, sm: 5, base: 5 }}
                flexWrap={"wrap"}
                mt={5}
              >
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input />
                </FormControl>
              </Flex>
              <Flex
                gap={{ lg: 10, md: 10, sm: 5, base: 5 }}
                flexWrap={"wrap"}
                mt={5}
              >
                <FormControl>
                  <FormLabel>State</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>ZIP</FormLabel>
                  <Input />
                </FormControl>
              </Flex>
              <Flex
                gap={{ lg: 10, md: 10, sm: 5, base: 5 }}
                flexWrap={"wrap"}
                mt={5}
              >
                <FormControl>
                  <FormLabel>Dare</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input />
                </FormControl>
              </Flex>
              <Flex
                gap={5}
                fontSize={12}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
                py={5}
              >
                <Radio>Online Payment</Radio>
                <Radio>Cash on Delivery</Radio>
                <Radio>POS on Delivery</Radio>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading>Checkout</Heading>
          <Box>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </Box>
          <Button
          my={5}
            width={"100%"}
            _hover={"none"}
            height={50}
            bg={"darkorange"}
            color={"#fff"}
          >
            Checkout
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Checkout;
