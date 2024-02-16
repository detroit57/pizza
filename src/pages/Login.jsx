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
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box className="gray" height={"100vh"} width={"100vw"}>
      <Flex>
        <Image
          src="/pizblack.jpg"
          width={"50vw"}
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          height={"100vh"}
          objectFit={"cover"}
        />
        <Box padding={0} px={{lg : "120px",md : "120px", sm : "100px",base : "20px"}} pt={{lg : 20, md : 20, sm : "100px",base : "100px"}} width={"100vw"}>
          <Heading fontSize={{lg : 50, md : "40px", sm : "30px", base : "30px"}}>Welcome Back 👋</Heading>
          <Text py={1}>Please fill the form with your appropiate detials</Text>
          <FormControl pt={5}>
            <FormLabel>Email Address *</FormLabel>
            <Input
              bg={"#fff"}
              width={{lg : "100%", md : "100%", sm : "100%", base : "100%"}}
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
            <Text>Forgotten Password?</Text>
          </Flex>
          <Link to={"/home"}>
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
              Login
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
