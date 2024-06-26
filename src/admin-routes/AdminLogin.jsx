import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { PasswordCheck, Sms } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <Flex justifyContent={"center"} mt={"100px"}>
      <Box>
        <Heading>Login Page🧑‍💻</Heading>
        <Text>Please fill in your apporpriate details⚠️</Text>
        <FormControl pt={5} pos={"relative"}>
          <FormLabel>Email</FormLabel>
          <Input width={400} type="email" placeholder="admin@gmail.com" />
          <IconButton
            pos={"absolute"}
            right={"0"}
            bg={"none"}
            icon={<Sms variant="Bold" color="#620997" />}
          />
        </FormControl>
        <FormControl pt={5} pos={"relative"}>
          <FormLabel>Password</FormLabel>
          <Input placeholder="***************" type="password" />
          <IconButton
            pos={"absolute"}
            right={"0"}
            bg={"none"}
            icon={<PasswordCheck variant="Bold" color="#620997" />}
          />
        </FormControl>
        <Text textAlign={"right"}>Forgotten Password?</Text>
        <Link to={"/dashboard"}>
          <Button
            bg={"linear-gradient(45deg, #620997,#620997)"}
            color={"#fff"}
            _hover={"none"}
            width={"full"}
            mt={3}
          >
            Login
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default AdminLogin;
