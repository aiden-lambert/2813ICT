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
