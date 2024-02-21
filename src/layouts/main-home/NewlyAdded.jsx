import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

const NewlyAdded = () => {
  return (
    <Box>
      <Heading
        fontSize={{ lg: 80, md: 70, sm: 60, base: "35px" }}
        textAlign={"center"}
        py={5}
      >
        Newly Added
      </Heading>
      <Flex
        justifyContent={"center"}
        gap={{ lg: 10, md: 10, sm: 5, base: 5 }}
        flexWrap={"wrap"}
      >
        <Card
          image={
            "https://img.freepik.com/free-photo/top-view-chicken-wings-plate-with-sesame-seeds-cherry-tomatoes_23-2148679083.jpg?w=740&t=st=1707405875~exp=1707406475~hmac=903c74428df19ff7de2ebdeaeb54a2dd76a2a5392465cb5cb3dc0de6a70d104a"
          }
          des={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis fugit sunt enim tempora? Voluptas minus quam perferendis illo, a distinctio ad cumque non tempore alias. Rem provident quaerat consequuntur."
          }
          name={"Fried Chicken Wings"}
        />
        <Card
          image={
            "https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
          }
          des={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis fugit sunt enim tempora? Voluptas minus quam perferendis illo, a distinctio ad cumque non tempore alias. Rem provident quaerat consequuntur."
          }
          name={"Mimi's Special Spaghetti"}
        />
        <Card
          image={
            "https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
          }
          des={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis fugit sunt enim tempora? Voluptas minus quam perferendis illo, a distinctio ad cumque non tempore alias. Rem provident quaerat consequuntur."
          }
          name={"Mimi's Spaghetti"}
        />
        <Card
          image={
            "https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
          }
          des={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis fugit sunt enim tempora? Voluptas minus quam perferendis illo, a distinctio ad cumque non tempore alias. Rem provident quaerat consequuntur."
          }
          name={"Mimi's Spaghetti"}
        />
        <Card
          image={
            "https://img.freepik.com/premium-photo/stir-fried-tom-yum-seafood-dried-spaghetti-fusion-food-style_1339-143653.jpg?w=826"
          }
          des={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis fugit sunt enim tempora? Voluptas minus quam perferendis illo, a distinctio ad cumque non tempore alias. Rem provident quaerat consequuntur."
          }
          name={"Mimi's Spaghetti"}
        />
        <Card
          image={
            "https://img.freepik.com/free-photo/top-view-chicken-wings-plate-with-sesame-seeds-cherry-tomatoes_23-2148679083.jpg?w=740&t=st=1707405875~exp=1707406475~hmac=903c74428df19ff7de2ebdeaeb54a2dd76a2a5392465cb5cb3dc0de6a70d104a"
          }
          des={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis fugit sunt enim tempora? Voluptas minus quam perferendis illo, a distinctio ad cumque non tempore alias. Rem provident quaerat consequuntur."
          }
          name={"Fried Chicken Wings"}
        />
        <Card
          image={
            "https://img.freepik.com/free-photo/top-view-chicken-wings-plate-with-sesame-seeds-cherry-tomatoes_23-2148679083.jpg?w=740&t=st=1707405875~exp=1707406475~hmac=903c74428df19ff7de2ebdeaeb54a2dd76a2a5392465cb5cb3dc0de6a70d104a"
          }
          des={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis fugit sunt enim tempora? Voluptas minus quam perferendis illo, a distinctio ad cumque non tempore alias. Rem provident quaerat consequuntur."
          }
          name={"Fried Chicken Wings"}
        />
        <Card
          image={
            "https://img.freepik.com/free-photo/top-view-chicken-wings-plate-with-sesame-seeds-cherry-tomatoes_23-2148679083.jpg?w=740&t=st=1707405875~exp=1707406475~hmac=903c74428df19ff7de2ebdeaeb54a2dd76a2a5392465cb5cb3dc0de6a70d104a"
          }
          des={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis fugit sunt enim tempora? Voluptas minus quam perferendis illo, a distinctio ad cumque non tempore alias. Rem provident quaerat consequuntur."
          }
          name={"Fried Chicken Wings"}
        />
      </Flex>
    </Box>
  );
};

export default NewlyAdded;
