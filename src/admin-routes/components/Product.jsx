import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  CloseButton,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { Edit, Edit2, TickCircle, Trash } from "iconsax-react";
import React, { useState } from "react";
import AlertDelete from "./AlertDelete";

const Product = () => {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/top-view-chicken-wings-plate-with-sesame-seeds-cherry-#620997es_23-2148679083.jpg?w=740&t=st=1707405875~exp=1707406475~hmac=903c74428df19ff7de2ebdeaeb54a2dd76a2a5392465cb5cb3dc0de6a70d104a"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box boxShadow={"0px 0px 10px #eee"} pb={5} borderRadius={30}>
      <Image
        src={
          "https://img.freepik.com/free-photo/top-view-chicken-wings-plate-with-sesame-seeds-cherry-#620997es_23-2148679083.jpg?w=740&t=st=1707405875~exp=1707406475~hmac=903c74428df19ff7de2ebdeaeb54a2dd76a2a5392465cb5cb3dc0de6a70d104a"
        }
        width={"100%"}
        height={300}
        borderRadius={20}
        objectFit={"cover"}
      />
      <Box fontSize={20} p={5}>
        <Text>Fried Chicken</Text>
        <Text>Price: &nbsp; ₦ 4000</Text>
      </Box>
      <Flex gap={5} px={5}>
        <Button
          width={"45%"}
          bg={"none"}
          color={"black"}
          _hover={"none"}
          onClick={onOpen}
          leftIcon={<Edit2 variant="Bold" />}
        >
          Edit
        </Button>
        <AlertDelete />
      </Flex>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mt={100}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Flex justifyContent={"center"} pos={"relative"}>
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    objectFit={"cover"}
                    borderRadius={200}
                  />
                  <Text
                    pos={"absolute"}
                    fontSize={20}
                    fontWeight={600}
                    top={"80px"}
                    color={"#fff"}
                    textShadow={"0px 0px 10px #000"}
                  >
                    Upload Image
                  </Text>
                  <Input
                    type="file"
                    pos={"absolute"}
                    height={200}
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      const imageURL = URL.createObjectURL(e.target.files[0]);
                      setImage(imageURL);
                    }}
                    opacity={0}
                  />
                </Flex>
                <Flex justifyContent={"center"} pt={5}>
                  <Box>
                    <Text>Name</Text>
                    <Editable fontSize={20} defaultValue="Fried Chicken">
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                    <Text>Price</Text>
                    <Editable fontSize={20} defaultValue="₦ 4000">
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Box>
                </Flex>
              </Box>
            </ModalBody>

            {/* <ModalFooter> */}
            <Flex justifyContent={"center"} py={10}>
              <Button
                colorScheme="red"
                leftIcon={<CloseButton />}
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button colorScheme="teal" leftIcon={<TickCircle />}>
                Save
              </Button>
            </Flex>
            {/* </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default Product;
