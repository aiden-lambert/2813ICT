import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.tsx";
import UploadPage from "./Pages/UploadPage.tsx";
import Navbar from "./Components/Navbar.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/upload", element: <UploadPage /> },
]);
import "./App.css";
import Homepage from "./Pages/Homepage.tsx";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
