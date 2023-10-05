import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import fs from "fs";

function UploadPage() {
  const [landscapePosition, setLandscapePosition] = useState("");
  const [vegetationType, setVegetationType] = useState("");
  const [vegetationStage, setVegetationStage] = useState("");
  const [burnSeverity, setBurnSeverity] = useState("");
  const [groundRecoveryStage, setGroundRecoveryStage] = useState("");
  const [shrubRecoveryStage, setShrubRecoveryStage] = useState("");
  const [subCanopyRecoveryStage, setSubCanopyRecoveryStage] = useState("");
  const [tallestTreeRecoveryStage, setTallestTreeRecoveryStage] = useState("");
  const [faunaSpecies, setFaunaSpecies] = useState("");
  const [faunaCalls, setFaunaCalls] = useState("");
  const [floweringPlants, setFloweringPlants] = useState("");
  const [altitude, setAltitude] = useState("");
  const [barometricPressure, setBarometricPressure] = useState("");
  const [compassDirection, setCompassDirection] = useState("");
  const [accelerometerData, setAccelerometerData] = useState("");

  const handleLandscapePositionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLandscapePosition(event.target.value);
  };

  const handleVegetationTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setVegetationType(event.target.value);
  };

  const handleVegetationStageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setVegetationStage(event.target.value);
  };

  const handleBurnSeverityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setBurnSeverity(event.target.value);
  };

  const handleGroundRecoveryStageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setGroundRecoveryStage(event.target.value);
  };

  const handleShrubRecoveryStageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShrubRecoveryStage(event.target.value);
  };

  const handleSubCanopyRecoveryStageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSubCanopyRecoveryStage(event.target.value);
  };

  const handleTallestTreeRecoveryStageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTallestTreeRecoveryStage(event.target.value);
  };

  const handleFaunaSpeciesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFaunaSpecies(event.target.value);
  };

  const handleFaunaCallsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFaunaCalls(event.target.value);
  };

  const handleFloweringPlantsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFloweringPlants(event.target.value);
  };

  const handleAltitudeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAltitude(event.target.value);
  };

  const handleBarometricPressureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBarometricPressure(event.target.value);
  };

  const handleCompassDirectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompassDirection(event.target.value);
  };

  const handleAccelerometerDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccelerometerData(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      landscapePosition,
      vegetationType,
      vegetationStage,
      burnSeverity,
      groundRecoveryStage,
      shrubRecoveryStage,
      subCanopyRecoveryStage,
      tallestTreeRecoveryStage,
      faunaSpecies,
      faunaCalls,
      floweringPlants,
      altitude,
      barometricPressure,
      compassDirection,
      accelerometerData,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Landscape Position</FormLabel>
        <Select
          value={landscapePosition}
          onChange={handleLandscapePositionChange}
        >
          <option value="flat/undulating">Flat/Undulating</option>
          <option value="ridge or hill">Ridge or Hill</option>
          <option value="slope">Slope</option>
          <option value="valley/gully">Valley/Gully</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Vegetation Type</FormLabel>
        <Select value={vegetationType} onChange={handleVegetationTypeChange}>
          <option value="Eucalypt forest (fern or herb)">
            Eucalypt Forest (Fern or Herb)
          </option>
          <option value="Eucalypt forest (grassy)">
            Eucalypt Forest (Grassy)
          </option>
          <option value="Eucalypt forest (shrubby)">
            Eucalypt Forest (Shrubby)
          </option>
          <option value="Rainforest">Rainforest</option>
          <option value="Riparian">Riparian</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Vegetation Stage</FormLabel>
        <Select value={vegetationStage} onChange={handleVegetationStageChange}>
          <option value="old">Old</option>
          <option value="mature">Mature</option>
          <option value="regrowth">Regrowth</option>
          <option value="mixed">Mixed</option>
          <option value="few trees present">Few Trees Present</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Burn Severity</FormLabel>
        <Select value={burnSeverity} onChange={handleBurnSeverityChange}>
          <option value="unburnt">Unburnt</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
          <option value="extreme">Extreme</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Ground Recovery Stage</FormLabel>
        <Select
          value={groundRecoveryStage}
          onChange={handleGroundRecoveryStageChange}
        >
          <option value="none">None</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="heavy">Heavy</option>
          <option value="complete">Complete</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Shrub Recovery Stage</FormLabel>
        <Select
          value={shrubRecoveryStage}
          onChange={handleShrubRecoveryStageChange}
        >
          <option value="none">None</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="heavy">Heavy</option>
          <option value="complete">Complete</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Sub-Canopy Recovery Stage</FormLabel>
        <Select
          value={subCanopyRecoveryStage}
          onChange={handleSubCanopyRecoveryStageChange}
        >
          <option value="none">None</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="heavy">Heavy</option>
          <option value="complete">Complete</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Tallest Tree Recovery Stage</FormLabel>
        <Select
          value={tallestTreeRecoveryStage}
          onChange={handleTallestTreeRecoveryStageChange}
        >
          <option value="none">None</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="heavy">Heavy</option>
          <option value="complete">Complete</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Fauna Species</FormLabel>
        <Input
          type="text"
          value={faunaSpecies}
          onChange={handleFaunaSpeciesChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Fauna Calls</FormLabel>
        <Textarea value={faunaCalls} onChange={handleFaunaCallsChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Flowering Plants</FormLabel>
        <Input
          type="text"
          value={floweringPlants}
          onChange={handleFloweringPlantsChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Altitude</FormLabel>
        <Input type="number" value={altitude} onChange={handleAltitudeChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Barometric Pressure</FormLabel>
        <Input
          type="number"
          value={barometricPressure}
          onChange={handleBarometricPressureChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Compass Direction</FormLabel>
        <Input
          type="text"
          value={compassDirection}
          onChange={handleCompassDirectionChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Accelerometer Data</FormLabel>
        <Input
          type="text"
          value={accelerometerData}
          onChange={handleAccelerometerDataChange}
        />
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default UploadPage;
