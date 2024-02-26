import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex justifyContent={"center"}>
      <Box
        borderRadius={40}
        my={3}
        mx={3}
        pt={{ xl: 200, lg: 150, md: "120px", sm: "120px", base: "120px" }}
        px={{ lg: 20, md: "40px", sm: 10, base: "15px" }}
        bgImage={
          "url(https://img.freepik.com/premium-photo/baked-chicken-wings-asian-style-plate_2829-6394.jpg?w=826)"
        }
        width={{ lg: "98vw", md: "100vw", sm: "100vw", base: "100%" }}
        height={{ xl : "100vh",lg: "100vh", md: "70vh", sm: "60vh", base: "100vh" }}
        bgRepeat={"no-repeat"}
        color={"#fff"}
        bgSize={"cover"}
      >
        <Heading
          width={{xl : "80%", lg : "10%0%", md : "100%", sm : "100%", base : "100%"}}
          textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
          fontSize={{ xl: 100, lg: 80, md: 60, sm: 40, base: "40px" }}
          textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
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
            fontSize={{ xl: "30px", lg: 20, md: 15, sm: 15, base: 12 }}
            textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
            textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
          >
            Savor the Taste of Tradition, Explore Global Cuisine, and Discover{" "}
            <br />
            Culinary Inspiration at Every Bite.
          </Text>
        </Flex>
        <Flex
          justifyContent={{
            lg: "left",
            md: "left",
            sm: "center",
            base: "center",
          }}
        >
          <Link href="#cart">
            <Button
              mt={{ xl: 5, lg: 5, md: 5, sm: 5, base: 5 }}
              py={{ xl: 10, lg: 10, md: 8, sm: 7, base: 7 }}
              fontSize={{ xl: 25, lg: 20, md: 20, sm: 15, base: 12 }}
              width={{ xl: 300, lg: 300, md: 280, sm: 200, base: "300px" }}
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
