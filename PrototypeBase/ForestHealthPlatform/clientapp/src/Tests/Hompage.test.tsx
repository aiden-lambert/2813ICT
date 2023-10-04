/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Homepage from "../Pages/Homepage";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import UploadPage from "../Pages/UploadPage";

jest.mock("../assets/forest.jpg", () => "forest.jpg"); // Mock the image import

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/upload", element: <UploadPage /> },
]);

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate, // Return an empty jest function to test whether it was called or not...I'm not depending on the results so no need to put in a return value
}));
describe("Homepage", () => {
  it("renders the login form", () => {
    render(
      <ChakraProvider>
        <RouterProvider router={router} />
        <Homepage />
      </ChakraProvider>
    );
    const usernameInput = screen.getAllByTestId("username-input");
    const passwordInput = screen.getAllByPlaceholderText("Password");
    const loginButton = screen.getAllByText("Login");
    const signUpButton = screen.getAllByText("Sign Up");

    expect(usernameInput[0]).toBeInTheDocument();
    expect(passwordInput[0]).toBeInTheDocument();
    expect(loginButton[0]).toBeInTheDocument();
    expect(signUpButton[0]).toBeInTheDocument();
  });

  it("validates the login form", () => {
    render(
      <ChakraProvider>
        <RouterProvider router={router} />
        <Homepage />
      </ChakraProvider>
    );
    const usernameInput = screen.getAllByTestId("username-input");
    const passwordInput = screen.getAllByPlaceholderText("Password");
    const loginButton = screen.getAllByText("Login");

    fireEvent.change(usernameInput[0], { target: { value: "admin" } });
    fireEvent.change(passwordInput[0], { target: { value: "admin" } });
    fireEvent.click(loginButton[0]);

    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
  });
});
