import React from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="teal.500"
      color="white"
      position="sticky"
      top="0"
      maxWidth="1440px"
      margin="0 auto"
      zIndex="1"
      marginBottom="32px"
    >
      <Box>
        <Link href="/" fontSize="xl" fontWeight="bold">
          Forest Health
        </Link>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={() => {}}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="white" />
        </svg>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        pl="32px"
      >
        <Link href="/" mr={8}>
          Home
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
