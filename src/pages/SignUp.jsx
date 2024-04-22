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

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    roles: "user",
    profileImage: null,
  });
  const formData = new FormData();
  formData.append("username", user.username);
  formData.append("email", user.email);
  formData.append("password", user.password);
  formData.append("roles", user.roles);
  formData.append("file", user.profileImage);
  const signup = () => {
    fetch("http://localhost:8080/signup", {
      header: { "Content-Type": "application/json" },
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.data != null) {
          localStorage.setItem("token", data.data);
          window.location.href = "/home";
        } else {
          alert("Registeration Failed");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Box className="gray">
      <Flex>
        <Image
          src="/img (4).jpg"
          width={"50vw"}
          height={"100vh"}
          objectFit={"cover"}
        />
        <Box p={100}>
          <Heading fontSize={50}>Welcome User 👋</Heading>
          <Text py={1}>Please fill the form with your appropiate detials</Text>
          <FormControl pt={5}>
            <FormLabel>Username *</FormLabel>
            <Input
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
              bg={"#fff"}
              width={500}
              type="text"
              placeholder="johndoe"
            />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Email Address *</FormLabel>
            <Input
              bg={"#fff"}
              width={500}
              value={user.email}
              type="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              placeholder="you@gmail.com"
            />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Password *</FormLabel>
            <Input
              value={user.email}
              bg={"#fff"}
              type="password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              placeholder="**************"
            />
          </FormControl>
          <Button
            fontSize={20}
            fontWeight={400}
            py={6}
            borderRadius={10}
            bg={"#620997"}
            color={"#fff"}
            _hover={"none"}
            // my={2}
            mt={5}
            width={"100%"}
          >
            {!loading ? "Sign Up" : <Spinner />}
          </Button>
          <Link to={"/login"}>
            <Text mt={4} textAlign={"center"}>
              Already have an account? Login
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUp;
