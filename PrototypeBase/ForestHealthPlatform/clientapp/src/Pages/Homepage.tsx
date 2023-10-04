import React, { useEffect } from "react";
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
import { users } from "../assets/FakeData";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [xUsername, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);
  const navigate = useNavigate();

  const validateLogin = () => {
    const user = users.find((user) => user.username === xUsername);
    if (user) {
      if (user.password === password) {
        setIsLogin(true);
      } else {
        alert("Incorrect username or password");
      }
    }
  };

  useEffect(() => {
    if (isLogin) {
      navigate("/upload");
    }
  }, [isLogin]);

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
        <Box display="flex" flexDir="column" gap="16px" w="300px">
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            data-testid="username-input"
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </Box>
        <HStack gap="20px">
          <Button onClick={() => validateLogin()}>Login</Button>
          <Button>Sign Up</Button>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default Homepage;
