import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import React, { useState } from "react";
import CheckoutItem from "./CheckoutItem";
import { Wallet, Wallet2, Wallet3 } from "iconsax-react";
import Footer from "./Footer";
import Header from "./Header";

const Checkout = () => {
  const [value,setValue] = useState("");
  return (
    <Box pt={5}>
      <Header />
      <Flex
      mt={{lg : 70, md : 70, sm : 50, base : 20}}
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
                onChange={(e)=>{
                  setValue(e);
                }}
                justifyContent={"space-between"}
                py={5}
              >
                <Radio value="Online Payment">Online Payment</Radio>
                <Radio value="Cash on Delivery">Cash on Delivery</Radio>
                <Radio value="POS on Delivery">POS on Delivery</Radio>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box width={{lg : "40vw", md : "40vw", sm : "100vw", base : "100vw"}} p={10}>
          <Heading>Checkout</Heading>
          <Box>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Carts (52)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckoutItem />
                  <CheckoutItem />
                  <CheckoutItem />
                  <CheckoutItem />
                  <CheckoutItem />
                  <CheckoutItem />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box>
            <Flex py={5} justifyContent={"space-between"}>
              <Text>Sub Total</Text>
              <Text>₦ 5200</Text>
            </Flex>
            <Flex py={5} justifyContent={"space-between"}>
              <Text>Shipping</Text>
              <Text>₦ 1500</Text>
            </Flex>
            <Flex py={5} justifyContent={"space-between"}>
              <Text>Total</Text>
              <Text>₦ 6700</Text>
            </Flex>
          </Box>
          <Button
            my={5}
            width={"100%"}
            _hover={"none"}
            height={50}
            bg={"#620997"}
            color={"#fff"}
            rightIcon={<Wallet3 variant="Bold" />}
            alignItems={"center"}
          >
            Pay Now
          </Button>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Checkout;
