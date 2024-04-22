import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Flex justifyContent={"center"}>
      <Box
        borderRadius={40}
        my={3}
        mx={3}
        bgImage={
          "url(https://media.istockphoto.com/id/1008416586/photo/buffet-at-nigerian-birthday-party.jpg?s=2048x2048&w=is&k=20&c=H3PP-RiJmkq1-dqXvAd22pTBmY9N5cqTMFVrOqnQ1_Q=)"
        }
        width={{ lg: "98vw", md: "100vw", sm: "100vw", base: "100%" }}
        height={{ lg: "90vh", md: "70vh", sm: "80vh", base: "80vh" }}
        bgRepeat={"no-repeat"}
        color={"#fff"}
        bgSize={"cover"}
      >
        <Box
          className="bg"
          width={{ lg: "98vw", md: "100vw", sm: "100%", base: "100%" }}
          borderRadius={40}
          height={{ lg: "90vh", md: "70vh", sm: "80vh", base: "80vh" }}
          pt={{ lg: 150, md: "120px", sm: "120px", base: "120px" }}
          px={{ lg: 20, md: "40px", sm: 10, base: "15px" }}
        >
          <Heading
            width={{ lg: "700px", md: "100%", sm: "100%", base: "100%" }}
            textAlign={{ lg: "left", md: "left", sm: "center", base: "center" }}
            fontSize={{ lg: 60, md: 60, sm: "40px", base: "40px" }}
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
              fontSize={{ lg: 15, md: 15, sm: 15, base: 12 }}
              textAlign={{
                lg: "left",
                md: "left",
                sm: "center",
                base: "center",
              }}
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
                mt={{ lg: 5, md: 5, sm: 5, base: 5 }}
                // py={{ lg: 7, md: 5, sm: 5, base: 5 }}
                p={7}
                fontSize={{ lg: 20, md: 20, sm: 15, base: 12 }}
                // width={{ lg: 200, md: 280, sm: 200, base: "200px" }}
                borderRadius={10}
                fontStyle={12}
                bg={"#620997"}
                color={"#fff"}
                _hover={"none"}
              >
                Explore Categories
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Hero;
