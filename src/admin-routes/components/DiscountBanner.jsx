import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const DiscountBanner = () => {
  return (
    <Box width={1000}>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        color={"#fff"}
        borderRadius={20}
        gap={50}
        bg={"darkorange"}
        p={5}
      >
        <Box width={500}>
          <Heading fontSize={35}>
            Get Discount Voucher <br /> Up to 20%
          </Heading>
          <Text fontSize={12} fontWeight={400}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sequi sunt, inventore illum dolorum quo officiis omnis iste eveniet
            illo! Aliquid ducimus magni, porro dolorem at reiciendis quaerat
            voluptatibus autem.
          </Text>
        </Box>
        <Image
          src="https://cart-royal.vercel.app/assets/lady.png"
          width={"18%"}
          objectFit={"cover"}
        />
      </Flex>
    </Box>
  );
};

export default DiscountBanner;
