import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex justifyContent={"center"}>
      <Box
        borderRadius={40}
        my={3}
        mx={3}
        pt={150}
        px={20}
        bgImage={
          "url(https://img.freepik.com/premium-photo/baked-chicken-wings-asian-style-plate_2829-6394.jpg?w=826)"
        }
        width={"98vw"}
        height={"96vh"}
        bgRepeat={"no-repeat"}
        color={"#fff"}
        bgSize={"cover"}
      >
        <Heading fontSize={80} textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}>
          Indulge in Flavorful <br /> Delights Your Culinary <br /> Adventure
          Begins Here!
        </Heading>
        <Text
          fontWeight={600}
          fontSize={20}
          textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
        >
          Savor the Taste of Tradition, Explore Global Cuisine, and Discover{" "}
          <br />
          Culinary Inspiration at Every Bite.
        </Text>
        <Link href="#cart">
          <Button
            mt={10}
            py={7}
            width={250}
            borderRadius={20}
            bg={"linear-gradient(45deg,tomato,darkorange)"}
            color={"#fff"}
            _hover={"none"}
          >
            Explore Categories
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Hero;
