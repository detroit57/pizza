import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";

const Categories = () => {
  return (
    <Box p={20}>
      <Heading fontSize={80}>Explore Categories</Heading>
      <Grid py={10} gridTemplateColumns={"1fr 1fr 1fr 1fr"}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Box>
  );
};

export default Categories;
