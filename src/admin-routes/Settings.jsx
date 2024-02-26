import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Radio,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import { Edit2 } from "iconsax-react";

const Settings = () => {
  return (
    <Box>
      <Header />
      <LeftSideBar />
      <Box pl={250} pt={90}>
        <Box>
          <Heading fontSize={50}>Settings</Heading>
          <Flex gap={10} pt={5}>
            <Box pos={"relative"}>
              <Box
                pos={"absolute"}
                textAlign={"center"}
                top={"100px"}
                color={"#fff"}
              >
                <Heading>Change Profile Picture</Heading>
              </Box>
              <Input
                type="file"
                top={0}
                pos={"absolute"}
                width={300}
                opacity={0}
                height={300}
              />
              <Image
                width={300}
                height={300}
                objectFit={"cover"}
                borderRadius={40}
                src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-139608.jpg?w=740&t=st=1707313441~exp=1707314041~hmac=f4fdede70854ae687e6b6ac43bf6c3c91664f4bc8d35d4ff2ac5cc20adfbe1cd"
              />
            </Box>
            <Box>
              <Heading fontSize={60}>Areegbe David</Heading>
              <Heading py={5} fontSize={40}>
                areegbedavid@gmail.com
              </Heading>
              <Input
                width={"100%"}
                type="password"
                placeholder="****************************"
                value={"**************************************************"}
              />
              {/* <Flex > */}
              <Button my={4} width={"100%"} py={6} colorScheme="teal">
                Update Details
              </Button>
              {/* </Flex> */}
            </Box>
          </Flex>
        </Box>
        <Box pt={5}>
          <Heading>Change Fonts</Heading>
          <Flex gap={5} py={5}>
            <Radio fontSize={20}>Poppins</Radio>
            <Radio fontSize={20}>Monserrat</Radio>
            <Radio fontSize={20}>Anton</Radio>
          </Flex>
        </Box>
        <Box>
          <Heading>Modes</Heading>
          <Flex fontSize={20} gap={5} alignItems={'center'}>
            <Text>Light</Text>
            <Switch colorScheme="red" />
            <Text>Dark</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
