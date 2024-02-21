import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ProductPage = () => {
  return (
    <Box>
      <Header />
      <Box marginTop={{ lg: "120px", md: "100px", sm: "50px", base: "50px" }}>
        <Flex
          p={{lg : 10, md : 10, sm : 5, base : 5}}
          gap={"40px"}
          flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        >
          <Image
            width={{lg : 500, md : 500, sm : "100%", base : "100%"}}
            objectFit={"cover"}
            borderRadius={40}
            height={500}
            src="https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
          />
          <Box>
            <Heading
              fontSize={{ lg: 50, md: 40, sm: "50px", base: "40px" }}
              py={3}
              fontWeight={900}
              textAlign={{
                lg: "left",
                md: "left",
                sm: "center",
                base: "center",
              }}
            >
              Jollof Rice and Chicken Super Combo
            </Heading>
            <Text
              textAlign={{
                lg: "left",
                md: "left",
                sm: "center",
                base: "center",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur perspiciatis asperiores odit rem non, error reiciendis
              officiis, exercitationem totam ipsum molestias soluta consequuntur
              modi, assumenda aliquam accusantium! Illo, amet tempore. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
              perspiciatis asperiores odit rem non, error reiciendis officiis,
              exercitationem totam ipsum molestias soluta consequuntur modi,
              assumenda aliquam accusantium! Illo, amet tempore.
            </Text>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={{ lg: 0, md: 0, sm: 5, base: 5 }}
              py={5}
              fontSize={{ lg: "30px", md: "30px", sm: 20, base: 20 }}
            >
              <Text>Price</Text>
              <Flex
                gap={5}
                fontSize={{ lg: "30px", md: "30px", sm: 20, base: 15 }}
              >
                <Text color={"#ddd"} textDecor={"line-through"}>
                  ₦ 4800
                </Text>
                <Text>₦ 2000</Text>
              </Flex>
            </Flex>
            <Button
              py={6}
              my={5}
              width={"100%"}
              _hover={"none"}
              bg={"linear-gradient(45deg,tomato,darkorange)"}
              color={"#fff"}
            >
              Add to Cart
            </Button>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductPage;
