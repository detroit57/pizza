import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  IconButton,
  Input,
  Text,
  Box,
  Image,
  Heading,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { AddCircle } from "iconsax-react";
import React, { useState } from "react";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/top-view-chicken-wings-plate-with-sesame-seeds-cherry-tomatoes_23-2148679083.jpg?w=740&t=st=1707405875~exp=1707406475~hmac=903c74428df19ff7de2ebdeaeb54a2dd76a2a5392465cb5cb3dc0de6a70d104a"
  );
  return (
    <>
      <Flex
        alignItems={"center"}
        gap={5}
        boxShadow={"0px 0px 2000px #000"}
        p={5}
        position={"fixed"}
        bg={"#fff"}
        bottom={10}
        onClick={onOpen}
        right={10}
        zIndex={999}
        borderRadius={30}
        width={"fit-content"}
      >
        <IconButton icon={<AddCircle size={50} variant="Bold" />} bg={"none"} />
        <Text fontSize={20}>Add Product</Text>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent height={"100vh"} pt={150}>
          <Box>
            <Flex justifyContent={"center"} alignItems={"center"} gap={20}>
              <Flex justifyContent={"center"} pos={"relative"}>
                <Image src={image} borderRadius={40} width={400} />
                <Input
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    const imageURL = URL.createObjectURL(e.target.files[0]);
                    setImage(imageURL);
                  }}
                  type="file"
                  pos={"absolute"}
                  height={"100%"}
                  opacity={0}
                />
              </Flex>
              <Box width={"30vw"}>
                <Heading>Add Product</Heading>
                <Box pt={5}>
                  <FormControl>
                    <FormLabel>Product Name</FormLabel>
                    <Input
                      fontSize={12}
                      placeholder="Jollor Rice and Chicken"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Product Price</FormLabel>
                    <Input fontSize={12} placeholder="20000" />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Product Description</FormLabel>
                    <Input
                      fontSize={12}
                      placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit"
                    />
                  </FormControl>
                  <Flex justifyContent={"space-between"}>
                    <Button colorScheme={"teal"} width={"45%"} my={5}>
                      Save
                    </Button>
                    <Button colorScheme={"red"} onClick={onClose} width={"45%"} my={5}>
                      Close
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddProduct;
