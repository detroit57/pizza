import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Bag2, Wallet } from "iconsax-react";

const ProductPage = () => {
  useEffect(() => {
    window.screenTop = 0;
  }, []);
  return (
    <Box>
      <Header />

      <Box mt={"100px"}>
        <Flex
          flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
          px={{ lg: 40, md: 40, sm: 10, base: 10 }}
          py={10}
          gap={20}
        >
          <Image
            width={{ lg: 500, md: 500, sm: "100%", base: "100%" }}
            height={{ lg: 500, md: 500, sm: 400, base: 400 }}
            borderRadius={40}
            objectFit={"cover"}
            src={
              "https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
            }
          />
          <Box>
            <Heading fontSize={50}>Mimis Special Bolonise Spaghetti</Heading>
            <Text mt={5}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur similique totam rerum minus blanditiis minima assumenda
              in quasi veniam dignissimos ipsa voluptatibus nihil facere
              facilis, tenetur laudantium laborum quis distinctio? Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Aspernatur similique
              totam rerum minus blanditiis minima assumenda in quasi veniam
              dignissimos ipsa voluptatibus nihil facere facilis, tenetur
              laudantium laborum quis distinctio?
            </Text>
            <Button
              bg={"#620997"}
              color={"#fff"}
              leftIcon={<Bag2 />}
              _hover={{ bg: "#620997" }}
              px={12}
              borderRadius={20}
              mt={3}
              py={6}
            >
              Add to Cart
            </Button>
            <Flex pt={10} gap={{ lg: 5, md: 5, sm: 3, base: 3 }}>
              <Image
                src="https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
                width={{ lg: 100, md: 100, sm: "80px", base: "80px" }}
                height={{ lg: 100, md: 100, sm: "80px", base: "80px" }}
                p={0.5}
                _hover={{ border: "4px solid #ddd", transition: "all 0.1s" }}
                borderRadius={10}
                objectFit={"cover"}
              />
              <Image
                src="https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
                width={{ lg: 100, md: 100, sm: "80px", base: "80px" }}
                height={{ lg: 100, md: 100, sm: "80px", base: "80px" }}
                p={0.5}
                _hover={{ border: "4px solid #ddd", transition: "all 0.1s" }}
                borderRadius={10}
                objectFit={"cover"}
              />
              <Image
                src="https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
                width={{ lg: 100, md: 100, sm: "80px", base: "80px" }}
                height={{ lg: 100, md: 100, sm: "80px", base: "80px" }}
                p={0.5}
                _hover={{ border: "4px solid #ddd", transition: "all 0.1s" }}
                borderRadius={10}
                objectFit={"cover"}
              />
              <Image
                src="https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
                width={{ lg: 100, md: 100, sm: "80px", base: "80px" }}
                height={{ lg: 100, md: 100, sm: "80px", base: "80px" }}
                p={0.5}
                _hover={{ border: "4px solid #ddd", transition: "all 0.1s" }}
                borderRadius={10}
                objectFit={"cover"}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
};

export default ProductPage;
