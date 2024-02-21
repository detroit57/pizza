import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import ProductRIghtSection from "./components/ProductRIghtSection";

const Products = () => {
  return (
    <Box>
      <Header />
      <LeftSideBar />
      <ProductRIghtSection />
    </Box>
  );
};

export default Products;
