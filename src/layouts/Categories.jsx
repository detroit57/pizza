import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";

const Categories = () => {
  return (
    <Box p={{ lg: 20, md: 20, sm: 10, base: 5 }}>
      <Heading fontSize={{ lg: 80, md: 70, sm: 60, base: 40 }}>
        Explore Categories
      </Heading>
      <Grid
        py={10}
        gridTemplateColumns={{
          lg: "1fr 1fr 1fr 1fr",
          md: "1fr 1fr 1fr",
          sm: "1fr 1fr",
          base: "1fr 1fr",
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Box>
  );
};

export default Categories;
