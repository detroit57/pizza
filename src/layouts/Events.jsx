import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Event from "../components/Event";

const Events = () => {
  return (
    <Box px={{lg :  20, md : 20, sm : 10, base : 10}} my={100}>
      <Heading fontSize={80}>Events</Heading>
      <Flex width={"100%"} gap={10} overflowX={"scroll"} height={"fit-content"} mt={5} borderRadius={40}>
        <Event image={"/img (5).jpg"} event={"Independence Day"} />
        <Event image={"/img (6).jpg"} event={"Sunday Event"} />
        <Event image={"/img (9).jpg"} event={"Meal Plan"} />
        <Event image={"/img (10).jpg"} event={"Vallentine's Day"} />
        <Event image={"/img (12).jpg"} event={"Womens Day"} />
        <Event image={"/img (13).jpg"} event={"Q's and A's Day"} />
      </Flex>
    </Box>
  );
};

export default Events;
