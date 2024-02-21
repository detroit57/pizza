import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex justifyContent={"center"}>
      <Box
        borderRadius={40}
        my={3}
        mx={3}
        pt={{ lg: 150, md: 100, sm: 100, base: 110 }}
        px={{ lg: 20, md: "20px", sm: 10, base: "15px" }}
        bgImage={
          "url(https://img.freepik.com/premium-photo/baked-chicken-wings-asian-style-plate_2829-6394.jpg?w=826)"
        }
        width={{ lg: "98vw", md: "100vw", sm: "100vw", base: "100%" }}
        height={{ lg: "96vh", md: "100vh", sm: "80vh", base: "90vh" }}
        bgRepeat={"no-repeat"}
        color={"#fff"}
        bgSize={"cover"}
      >
        <Heading
          textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
          fontSize={{ lg: 80, md: 70, sm: 50, base: "40px" }}
          textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
          css={{
            "@media screen (max-width: 300px)": {
              bg: "green",
            },
          }}
        >
          Indulge in Flavorful Delights Your Culinary Adventure Begins Here!
        </Heading>
        <Flex
          justifyContent={{
            lg: "left",
            md: "left",
            sm: "center",
            base: "center",
          }}
        >
          <Text
            fontWeight={600}
            width={{ lg: "100%", base: "80%" }}
            fontSize={{ lg: 20, md: 20, sm: 15, base: 12 }}
            textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
            textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
          >
            Savor the Taste of Tradition, Explore Global Cuisine, and Discover{" "}
            <br />
            Culinary Inspiration at Every Bite.
          </Text>
        </Flex>
        <Flex justifyContent={"center"}>
          <Link href="#cart">
            <Button
              mt={{ lg: 10, md: 5, sm: 5, base: 5 }}
              py={7}
              width={{ lg: 250, md: 200, sm: 150, base: "100%" }}
              borderRadius={20}
              bg={"linear-gradient(45deg,tomato,darkorange)"}
              color={"#fff"}
              _hover={"none"}
            >
              Explore Categories
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Hero;
