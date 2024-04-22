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
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [dis, setDis] = useState("none");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const formdata = new FormData();
  formdata.append("email", user.email);
  formdata.append("password", user.password);
  const login = () => {
    fetch("http://localhost:8080/login", {
      header: { "Content-Type": "application/json" },
      method: "POST",
      body: formdata,
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
          alert("Login Failed");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Box className="gray" height={"100vh"} width={"100vw"}>
      <Flex>
        <Image
          src="/img (16).jpg"
          width={"80vw"}
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          height={"100vh"}
          objectFit={"cover"}
        />
        <Box
          padding={0}
          px={{ lg: "200px", md: "120px", sm: "60px", base: "40px" }}
          pt={{ lg: 20, md: 20, sm: "100px", base: "100px" }}
          width={"100%"}
        >
          <Heading fontSize={{ lg: 40, md: "40px", sm: "30px", base: "30px" }}>
            Welcome Back 👋
          </Heading>
          <Text py={1}>Please fill the form with your appropiate detials</Text>
          <FormControl pt={5}>
            <FormLabel>Email Address *</FormLabel>
            <Input
              bg={"#fff"}
              width={{ lg: "100%", md: "100%", sm: "100%", base: "100%" }}
              type="email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              placeholder="you@gmail.com"
            />
          </FormControl>
          <FormControl pt={5}>
            <FormLabel>Password *</FormLabel>
            <Input
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              bg={"#fff"}
              type="password"
              placeholder="**************"
            />
          </FormControl>
          <Text py={2} textAlign={"right"}>
            Forgotten Password?
          </Text>
          {/* <Link to={"/home"}> */}
          <Button
            rightIcon={<Spinner display={dis} />}
            fontSize={20}
            fontWeight={400}
            py={6}
            borderRadius={10}
            onClick={() => {
              setDis("block");
              login();
            }}
            bg={"#620997"}
            color={"#fff"}
            _hover={"none"}
            my={2}
            width={"100%"}
          >
            Login
          </Button>
          {/* </Link> */}
          <Link to={"/signup"}>
            <Text textAlign={"center"}>Don't have an account? Sign Up</Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
