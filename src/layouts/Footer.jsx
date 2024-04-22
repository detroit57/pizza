import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { Facebook, Google, Instagram, Whatsapp } from "iconsax-react";
import React from "react";

const Footer = () => {
  return (
    <Box bg={"#111"} mt={100} id="contacts" color={"#fff"} p={20}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        <Box width={{ lg: 400, md: 400, sm: "100%", base: "100%" }}>
          <Image src="/logo.jpg" width={100} borderRadius={100} />
          <Text fontSize={12} pt={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            consequuntur ad, enim vel repudiandae magni adipisci harum, quod
            dolorum ipsa vitae minima maxime vero delectus nobis incidunt,
            asperiores ipsam quibusdam?
          </Text>

          <Flex gap={5} mt={3}>
            <Facebook variant="Bold" size={30} />
            <Whatsapp variant="Bold" size={30} />
            <Instagram variant="Bold" size={30} />
            <Google variant="Bold" size={30} />
          </Flex>
        </Box>

        <Box mt={{ lg: 0, md: 0, sm: 5, base: 5 }}>
          <Heading>Mimis</Heading>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Events</Text>
          <Text>Contact</Text>
          <Text>Categories</Text>
        </Box>
        <Box mt={{ lg: 0, md: 0, sm: 5, base: 5 }}>
          <Heading>Help</Heading>
          <Text>Customer Support</Text>
          <Text>Delivery Details</Text>
          <Text>Terms and Condition</Text>
          <Text>Privacy and Policy</Text>
          <Text>Customer Service</Text>
        </Box>
        <Box mt={{ lg: 0, md: 0, sm: 5, base: 5 }}>
          <Heading>FAQ</Heading>
          <Text>Account</Text>
          <Text>Manage Deliveries</Text>
          <Text>Orders</Text>
          <Text>Payments</Text>
          <Text>Order Tracking</Text>
        </Box>
        <Box
          mt={{ lg: 0, md: 0, sm: 5, base: 5 }}
          width={{ lg: 300, md: 300, sm: "100%", base: "100%" }}
        >
          <Heading fontSize={"25px"}>Join our Mailing List</Heading>
          <Input
            border={"2px solid #ddd"}
            type="email"
            placeholder="Enter your Email Address"
            my={2}
            fontSize={12}
            borderRadius={10}
          />
          <Button width={"100%"} bg={"#fff"}>
            Join 🚀
          </Button>
        </Box>
      </Flex>

      <hr
        style={{
          height: 2,
          background: "#fff",
          margin: "40px 0px",
          borderRadius: 40,
        }}
      />

      <Text textAlign={"center"}>&copy; All Rights Reserved Mimis Website</Text>
    </Box>
  );
};

export default Footer;
