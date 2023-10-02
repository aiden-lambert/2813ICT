import React from "react";
import { Box } from "@chakra-ui/react";

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Box mx="10%" display="flex" justifyContent="center">
      <Box width="100%" maxWidth="1440px">
        {children}
      </Box>
    </Box>
  );
};

export default Page;
