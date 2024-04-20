import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Social from "../components/Social";
import PercentageCard from "../components/PercentageCard";
import { Facebook, Instagram, Whatsapp } from "iconsax-react";

const Discounts = () => {
  return (
    <Flex py={10} justifyContent={"center"}>
      <Box>
        <Heading
          textAlign={"center"}
          fontSize={{ lg: 60, md: 50, sm: "30px", base: "20px" }}
        >
          Get 20% discounts <br /> on Your First Purchase
        </Heading>
        <PercentageCard />
        <Box pt={20}>
          <Heading
            textAlign={"center"}
            fontSize={{ lg: 60, md: 50, sm: 40, base: 40 }}
            py={5}
          >
            Follow Us On
          </Heading>
          <Flex pt={10} justifyContent={"center"} flexWrap={"wrap"} gap={5}>
            <Social
              followers={"3000"}
              icon={<Facebook variant="Bold" color="#2591f1" size={60} />}
            />
            <Social
              followers={"3000"}
              icon={<Instagram variant="Bold" color="red" size={60} />}
            />
            <Social
              followers={"3000"}
              icon={<Whatsapp variant="Bold" color="green" size={60} />}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Discounts;
