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
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [dis,setDis]= useState("none");
  return (
    <Box className="gray" height={"100vh"} width={"100vw"}>
      <Flex>
        <Image
          src="/img (10).jpg"
          width={"80vw"}
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          height={"100vh"}
          objectFit={"cover"}
        />
        <Box padding={0} px={{lg : "200px",md : "120px", sm : "60px",base : "40px"}} pt={{lg : 20, md : 20, sm : "100px",base : "100px"}} width={"100%"}>
          <Heading   fontSize={{lg : 40, md : "40px", sm : "30px", base : "30px"}}>Welcome Back 👋</Heading>
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
            <Text py={2} textAlign={"right"}>Forgotten Password?</Text>
          <Link to={"/home"}>
            <Button
              rightIcon={<Spinner display={dis} />}
              fontSize={20}
              fontWeight={400}
              py={6}
              borderRadius={10}
              onClick={()=>{
                setDis("block");
              }}
              bg={"#620997"}
              color={"#fff"}
              _hover={"none"}
              my={2}
              width={"100%"}
            >
              Login
            </Button>
          </Link>
          <Text textAlign={'center'}><Link to={"/admin-login"}>Login as Admin</Link></Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
