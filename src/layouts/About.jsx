import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Flex
    id="about"
      flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
      pt={150}
      px={{lg : 20, md : 20, sm : 0, base: 0}}
      bgImage={{
        lg: "none",
        md: "none",
        sm: "url('/img (8).jpg')",
        base: "url('/img (8).jpg')",
      }}
      bgSize={"cover"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        px={{ lg: 0, md: 0, sm: 5, base: 5 }}
        className="col"
        width={800}
      >
        <Heading fontSize={{ lg: 80, md: 70, sm: 60, base: 40 }}>
          About Us
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          sint qui quo, vero eos id ut fugiat maiores itaque voluptate eum
          corporis debitis recusandae omnis. Quae officia facilis ipsum quia?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          sint qui quo, vero eos id ut fugiat maiores itaque voluptate eum
          corporis debitis recusandae omnis. Quae officia facilis ipsum quia?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          sint qui quo, vero eos id ut fugiat maiores itaque voluptate eum
          corporis debitis recusandae omnis. Quae officia facilis ipsum quia?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          sint qui quo, vero eos id ut fugiat maiores itaque voluptate eum
          corporis debitis recusandae omnis. Quae officia facilis ipsum quia?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          sint qui quo, vero eos id ut fugiat maiores itaque voluptate eum
          corporis debitis recusandae omnis. Quae officia facilis ipsum quia?
        </Text>
      </Box>
      <Image
        display={{ lg: "block", md: "block", sm: "none", base: "none" }}
        src="/img (8).jpg"
        borderRadius={40}
        width={500}
      />
    </Flex>
  );
};

export default About;
