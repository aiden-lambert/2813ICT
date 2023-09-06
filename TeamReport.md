# Executive Summary

### Potential prototypes

1.  UI/UX -

- Login page
- Homepage
- Image upload / metadata page

2. Database design

- Entitiy modelling for two user types (Admin/Researcher & User/Citizen scientist)
- Database design for storing images and metadata
- Maybe some basic ACLs on admin / user func

3. Simple functionality

- Handle user login
- Build a simple prototype that allows users to upload images and metadata
- Basic API for CRUD operations on images and metadata

UI/UX can be done in figma or something simialar backend will be dotnet core and database will be postgresql - For basic prototyping can use Typescript/React with a mobile design focus

Current Kanban board : https://trello.com/b/NmcAvTbi/forest-tasks

### Project Stakeholders:

- Project Team: Developers, designers, and project manager.
- Citizen Scientists: Users of the app who will collect and submit data.
- Environmental Scientists: Experts who will analyze the collected data.
- End-Users: Those interested in monitoring forest health and post-fire recovery.

### Prototype Objectives:

- Develop a prototype of a portion of the citizen science app.
- Implement a secure login functionality.
- Enable data collection of various environmental parameters.
- Capture wildlife observations.
- Create a user-friendly interface web with a mobile focused desgin

### Work Breakdown Structure (WBS):

1. Project Initiation
   - Define project scope and objectives.
   - Identify stakeholders.
   - Form project team.
2. Requirements Gathering
   - Gather functional and non-functional requirements.
   - Define user stories and use cases.
   - Create tickets and backlog on trello
   - Identify prototypes to be developed.
3. System Design
   - Design the database schema in PostgreSQL.
   - Create the EF models in .NET.
   - Design the frontend UI using React.
   - Define the API endpoints in .NET.
4. Development
   - Implement user authentication (login functionality).
   - Create data collection forms for environmental parameters.
   - Implement wildlife observation forms.
5. Integration
   - Integrate the frontend and backend components.
   - Ensure data synchronization and validation.
6. Testing
   - Conduct unit testing and integration testing.
   - Perform user acceptance testing (UAT).
7. Documentation
   - Create user manual.
   - Create developer documentation.
   - Create project report.

### Project Dependencies and PDM:

1. Requirements Gathering (2) depends on Project Initiation (1).
2. System Design (3) depends on Requirements Gathering (2).
3. Development (4) depends on System Design (3).
4. Integration (5) depends on Development (4).
5. Testing (6) depends on Integration (5) and Development (4).
6. Documentation (7) can start in parallel with Development (4) and Integration (5).

## FURPS:

### Functionality:

1. As a Citizen Scientist, I want to create a user account and log in securely to the app so that my data remains private.

2. As a Citizen Scientist, I want to input data about the landscape position, including flat/undulating, ridge or hill, slope, and valley/gully.

3. As a Citizen Scientist, I want to select the vegetation type and its development stage, including Eucalypt forest (fern or herb), Eucalypt forest (grassy), Eucalypt forest (shrubby), Rainforest, and Riparian, and their respective stages (old, mature, regrowth, mixed, few trees present).

4. As a Citizen Scientist, I want to record the burn severity and recovery stage of flora, including severity (unburnt, low, moderate, high, extreme) and various recovery stages for ground layer, shrub layer, sub-canopy layer, and tallest tree layer.

5. As a Citizen Scientist, I want to document the species name or animal type of any fauna noticed during the survey.

6. As a Citizen Scientist, I want to record bird or animal calls in the survey location.

7. As a Citizen Scientist, I want to note the state of any flowering plants in the ground layer, shrub layer, and upper canopy layer.

8. As a Citizen Scientist, I want the option to capture altitude and barometric pressure.

9. As a Citizen Scientist, I want the option to record compass direction and accelerometer data.

### Usability:

10. As a Citizen Scientist, I want the user interface to be user-friendly, with a mobile-focused design, so that it's easy to use in the field.

Reliability: 11. As a Citizen Scientist, I want the app to reliably store and save the data I input, even if I lose network connectivity temporarily.

Performance: 12. As a Project Team member, I want the app to perform efficiently, allowing quick data entry and retrieval.

Supportability: 13. As a Project Manager, I want the app to be maintainable, with the ability to receive updates and bug fixes easily.

Now, let's create a UML Use Case diagram with a description of one use case in detail:

## Use Case:

### Use Case: Record Environmental Data

Description:

Actor: Citizen Scientist
Preconditions: Citizen Scientist is logged into the app and is in the data collection mode.
Main Flow:
Citizen Scientist selects the "Record Environmental Data" use case from the app's main menu.
The app displays a form with fields to input landscape position, vegetation type, burn severity, flora recovery, fauna observations, and more.
Citizen Scientist fills in the relevant data fields and submits the form.
The app validates and stores the data in a secure database.
Postconditions: The recorded environmental data is saved and can be accessed for analysis by Environmental Scientists or viewing by End-Users.
Alternate Flow 1: If the app detects any missing or invalid data, it prompts the Citizen Scientist to correct the errors before submission.
Alternate Flow 2: If the Citizen Scientist loses network connectivity during data entry, the app stores the data locally and syncs it with the server once connectivity is restored.

![Citizen Scientist Use Case](../2813ICT/Files/citizen-scientist-submit-state.PNG)
