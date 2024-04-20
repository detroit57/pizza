import {
  Box,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { Eye, EyeSlash } from "iconsax-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [type, setType] = useState("password");
  const [text, setText] = useState(<Eye />);
  return (
    <Box>
      <Flex
        display={{ lg: "flex", md: "flex", sm: "block", base: "block" }}
        flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base : 'wrap'}}
      >
        <Image
          width={{ lg: "50vw", md: "50vw", sm: "100vw", base: "100vw" }}
          height={{ lg: "100vh", md: "100vh", sm: "50vh", base: "50vh" }}
          borderBottomRadius={{ lg: 0, md: 0, sm: 20, base: 20 }}
          objectFit={"cover"}
          src="https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?w=740&t=st=1707312539~exp=1707313139~hmac=3c4f6c072136d471578e3b89de222cdfd047cca33109531701c8aff620280b1a"
        />
        <Box
          px={{ lg: 40, md: 40, sm: 10, base: 5 }}
          py={{ lg: "90px", md: "80px", sm: 10, base: 5 }}
        >
          <Heading>Your Profile</Heading>
          <Box py={3} mt={5}>
            <Text fontWeight={700}>Username</Text>
            <Editable defaultValue="@davidcodes234">
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
          <Box py={3}>
            <Text fontWeight={700}>Email Address</Text>
            <Editable defaultValue="davidcodes2005@gmail.com">
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Box>
          <Box py={3}>
            <Text fontWeight={700}>Password</Text>
            <Flex alignItems={"center"} gap={2}>
              <Input type={type} placeholder={"************************"} />
              <Button
                onClick={() => {
                  if (text) {
                    setType("text");
                    setText(<EyeSlash />);
                  } else {
                    setType("password");
                    setText(<Eye />);
                  }
                }}
                my={2}
                bg={"#620997"}
                color={"#fff"}
                _hover={"none"}
              >
                {text}
              </Button>
            </Flex>
          </Box>
          <Flex justifyContent={"space-between"}>
            <Button bg={"#000"} color={"#fff"} _hover={"none"} width={"45%"}>
              <Link to={"/home"}>Back</Link>
            </Button>
            <Button
              bg={"#620997"}
              color={"#fff"}
              _hover={"none"}
              width={"45%"}
            >
              Save
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
