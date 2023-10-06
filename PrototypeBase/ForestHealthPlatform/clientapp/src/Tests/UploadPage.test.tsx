import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";
import userEvent from "@testing-library/user-event";
import UploadPage from "../Pages/UploadPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/Homepage";

jest.mock("../assets/forest.jpg", () => "forest.jpg"); // Mock the image import

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/upload", element: <UploadPage /> },
]);

const mockedUsedNavigate = jest.fn();

describe("UploadPage form", () => {
  it("submits the form data when all fields are filled out", async () => {
    const mockSubmit = jest.fn();
    render(
      <ChakraProvider>
        <RouterProvider router={router} />
        <UploadPage onSubmit={mockSubmit} />
      </ChakraProvider>
    );
    const landscapePositionSelect = screen.getByLabelText("Landscape Position");
    const vegetationTypeSelect = screen.getByLabelText("Vegetation Type");
    const vegetationStageSelect = screen.getByLabelText("Vegetation Stage");
    const burnSeveritySelect = screen.getByLabelText("Burn Severity");
    const groundRecoveryStageSelect = screen.getByLabelText(
      "Ground Recovery Stage"
    );
    const shrubRecoveryStageSelect = screen.getByLabelText(
      "Shrub Recovery Stage"
    );
    const subCanopyRecoveryStageSelect = screen.getByLabelText(
      "Sub-Canopy Recovery Stage"
    );
    const tallestTreeRecoveryStageSelect = screen.getByLabelText(
      "Tallest Tree Recovery Stage"
    );
    const faunaSpeciesInput = screen.getByLabelText("Fauna Species");
    const faunaCallsTextarea = screen.getByLabelText("Fauna Calls");
    const floweringPlantsInput = screen.getByLabelText("Flowering Plants");
    const altitudeInput = screen.getByLabelText("Altitude");
    const barometricPressureInput = screen.getByLabelText(
      "Barometric Pressure"
    );
    const compassDirectionInput = screen.getByLabelText("Compass Direction");
    const accelerometerDataInput = screen.getByLabelText("Accelerometer Data");

    userEvent.selectOptions(landscapePositionSelect, "flat/undulating");
    userEvent.selectOptions(
      vegetationTypeSelect,
      "Eucalypt Forest (Fern or Herb)"
    );
    userEvent.selectOptions(vegetationStageSelect, "old");
    userEvent.selectOptions(burnSeveritySelect, "low");
    userEvent.selectOptions(groundRecoveryStageSelect, "light");
    userEvent.selectOptions(shrubRecoveryStageSelect, "moderate");
    userEvent.selectOptions(subCanopyRecoveryStageSelect, "heavy");
    userEvent.selectOptions(tallestTreeRecoveryStageSelect, "complete");
    userEvent.type(faunaSpeciesInput, "Kangaroo");
    userEvent.type(faunaCallsTextarea, "Roar");
    userEvent.type(floweringPlantsInput, "Wattle");
    userEvent.type(altitudeInput, "1000");
    userEvent.type(barometricPressureInput, "1013");
    userEvent.type(compassDirectionInput, "North");
    userEvent.type(accelerometerDataInput, "1,2,3");

    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith({
      landscapePosition: "flat/undulating",
      vegetationType: "Eucalypt Forest (Fern or Herb)",
      vegetationStage: "old",
      burnSeverity: "low",
      groundRecoveryStage: "light",
      shrubRecoveryStage: "moderate",
      subCanopyRecoveryStage: "heavy",
      tallestTreeRecoveryStage: "complete",
      faunaSpecies: "Kangaroo",
      faunaCalls: "Roar",
      floweringPlants: "Wattle",
      altitude: "1000",
      barometricPressure: "1013",
      compassDirection: "North",
      accelerometerData: "1,2,3",
    });
  });

  it("displays an error message if required fields are not filled out", async () => {
    render(
      <ChakraProvider>
        <RouterProvider router={router} />
        <UploadPage />
      </ChakraProvider>
    );
    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);
    const errorMessage = await screen.findByText(
      "Please fill out all required fields"
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
