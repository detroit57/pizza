import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { ArrowCircleRight } from "iconsax-react";
import React from "react";

const Hero = () => {
  return (
    <Box mt={100}>
      <Flex justifyContent={"center"} p={10}>
        <Box>
          <Flex justifyContent={"center"}>
            <Button
              borderRadius={20}
              bg={"#620997"}
              color={"#fff"}
              px={10}
              py={6}
              _hover={{ bg: "#620997" }}
            >
              🍕 Yummy to the crunch
            </Button>
          </Flex>
          <Heading pt={5} color={"#000"} textAlign={"center"} fontSize={{sm : 55, base : 40, md : 90, lg : 100}}>
            Made by Mimis <br /> Loved by All
          </Heading>
          <Flex justifyContent={"center"} pt={3}>
            <Text width={{lg : 500, md : 500, sm : "100%", base : "100%"}} textAlign={"center"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              numquam ipsam quos provident totam neque maxime, impedit nam quis
              dolor earum molestias labore modi praesentium eaque! Dolorem,
              dolorum quod. Iure.
            </Text>
          </Flex>
          <Flex justifyContent={"center"}>
            <Button
              rightIcon={<ArrowCircleRight variant="Bold" />}
              bg={"#620997"}
              _hover={{bg : "#620997"}}
              px={14}
              color={"#fff"}
              borderRadius={10}
              mt={5}
              py={7}
            >
              Get Started
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
