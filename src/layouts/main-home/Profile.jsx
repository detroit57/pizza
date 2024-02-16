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
          src="https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/394617381_10228641587416044_7399701632752763762_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFrncSr_i2ZA66HwhKxP2nmu2vCT-3Lmeq7a8JP7cuZ6l2jlNErtq_yxm-gu0SwPliIE9-oEsnxwQRM4IFtTD90&_nc_ohc=nyTS_2Jx_SwAX-BRQ1u&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&oh=00_AfDdCFBp9d4NrUuZd_hUCVa0ciWwzfK2h7t93_sZ5YTJGQ&oe=65D11313"
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
                bg={"darkorange"}
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
              bg={"darkorange"}
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
