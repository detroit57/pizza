import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import Categories from "../layouts/Categories";
import Discounts from "../layouts/Discounts";
import Footer from "../layouts/Footer";
import About from "../layouts/About";
import Events from "../layouts/Events";

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <About />
      <Events />
      <Categories />
      <Discounts />
      <Footer />
    </Box>
  );
};

export default Home;
