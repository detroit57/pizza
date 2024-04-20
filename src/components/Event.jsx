import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Event = ({ image, event }) => {
  return (
    <Box minW={"300px"}>
        <Image width={"300px"} mb={2} borderRadius={20} src={image} />
        <Text fontSize={"30px"} fontWeight={800}>{event}</Text>
    </Box>
  );
};

export default Event;
