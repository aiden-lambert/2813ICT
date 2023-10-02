import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.tsx";
import BasePage from "./Pages/BasePage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <LoginPage /> },
]);
import "./App.css";
import Homepage from "./Pages/Homepage.tsx";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
