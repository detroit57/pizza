import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SignUp = () => {
  return (
    <Box className="gray">
      <Flex>
        <Image
          src="/pizblack.jpg"
          width={"50vw"}
          height={"100vh"}
          objectFit={"cover"}
        />
        <Box p={100}>
          <Heading fontSize={50}>Welcome User 👋</Heading>
          <Text py={1}>Please fill the form with your appropiate detials</Text>
          <FormControl pt={5}>
            <FormLabel>Username *</FormLabel>
            <Input bg={"#fff"} width={500} type="text" placeholder="johndoe" />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Email Address *</FormLabel>
            <Input
              bg={"#fff"}
              width={500}
              type="email"
              placeholder="you@gmail.com"
            />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Password *</FormLabel>
            <Input bg={"#fff"} type="password" placeholder="**************" />
          </FormControl>
          <Flex py={2} justifyContent={"space-between"} fontWeight={500}>
            <Checkbox>Hide</Checkbox>
          </Flex>
          <Button
            rightIcon={<Spinner />}
            fontSize={20}
            fontWeight={400}
            py={6}
            borderRadius={10}
            bg={"linear-gradient(45deg,tomato,darkorange)"}
            color={"#fff"}
            _hover={"none"}
            my={2}
            width={"100%"}
          >
            SignUp
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUp;
