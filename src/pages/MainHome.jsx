import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/main-home/Header";
import Hero from "../layouts/main-home/Hero";
import LocomotiveScroll from "locomotive-scroll";
import Categories from "../layouts/main-home/Categories";
import NewlyAdded from "../layouts/main-home/NewlyAdded";
import Footer from "../layouts/main-home/Footer";

const MainHome = () => {
  const scroll = new LocomotiveScroll();
  return (
    <Box data-scroll-container>
      <Header />
      <Hero />
      <Categories />
      <NewlyAdded />
      <Footer />
    </Box>
  );
};

export default MainHome;
