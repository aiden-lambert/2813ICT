import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Input,
  VStack,
  Button,
  HStack,
} from "@chakra-ui/react";
import forestBg from "../assets/forest.jpg";

function Homepage() {
  return (
    <Flex
      w="100%"
      maxW="1440px"
      px="12px"
      flexDir="column"
      justifyContent="center"
      gap="32px"
    >
      <Flex w="100%" flexDir="column" gap="18px">
        <Image src={forestBg} alt="forest" borderRadius="12px" />
        <Text>Forest Health Platform</Text>
      </Flex>
      <VStack gap="18px">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <HStack gap="20px">
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default Homepage;
