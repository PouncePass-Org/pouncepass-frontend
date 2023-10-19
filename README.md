# PouncePass Local Development Environment Setup

This guide will walk you through setting up your local development environment for the LitVerse project.

## Prerequisites
- **PostgreSQL 16** installed on your local machine. [download from here](https://www.postgresql.org/download/)
    - If you are a mac user, also download [postgres.app](https://postgresapp.com/) for a very simple and good GUI for running your PSQL server.
- **Java 17** installed on your local machine. [download from here](https://www.oracle.com/java/technologies/downloads/#java17)
    - or use CLI commands like `brew install java@17` if you have homebrew
- **Node.js and npm** installed. If you don't have them, you can download and install from the [Node.js official website](https://nodejs.org/).
- You have cloned both the frontend and backend "development" branches from the repository - https://github.com/orgs/PouncePass-Org/repositories
- (OPTIONAL) [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) for testing API calls. They are useful and very common tools in industry, but are absolutely not necessary to use. Just can be helpful tools.

### Quick Setup Steps
#### Frontend:
1. Open terminal, navigate to the pouncepass-frontend project directory [(that you have already cloned from here)](https://github.com/PouncePass-Org/pouncepass-frontend)
2. Run `npm install`
3. Run `npm start`
    1. This will run the frontend server.
    2. Go to http://localhost:3000/login to see the frontend while you develop.
#### Backend:
1. Open another terminal, navigate to the pouncepass-backend project directory [(that you have already cloned from here)](https://github.com/PouncePass-Org/pouncepass-backend)
2. Start your PSQL server **ON PORT 5431** through the mac "postgres" app, windows "pgadmin" app, or through the terminal.
    1. There are many ways to run your psql server, but just make sure the port it is running on is the same as the port in the database_url in the ``application.properties`` file in the project (5431), and in the command used below.
3. Run `psql -h localhost -U dev -p 5431`
    1. Run `CREATE ROLE dev WITH LOGIN PASSWORD 'dev123'; ALTER ROLE dev CREATEDB;`
    2. Run `quit` to leave this psql CLI and go back to normal terminal CLI
4. Now back in your pouncepass-backend directory:
    1. Run `mvn spring-boot:run`
        1. If you have issues, do a `mvn clean install` then try again
5. Make sure this was successful and that your backend is running.
6. At this point, you're ready to develop.
7. Now, decide on what feature you want to develop and then create a branch for it, which you will make all your changes in. Make your changes, test your changes, then submit a PR once your changes are complete and working.
    1. Be detailed and concise in your PR, so that i can clearly see what it's for.

[//]: # (#### Optional &#40;Create 100 Mock Users&#41;)

[//]: # (1. While your frontend &#40;...:3000&#41;, prisma studio&#40;...:5555&#41;, and psql server are all running, open another terminal and in our project directory:)

[//]: # (2. Run `curl -X POST http://localhost:3000/api/userOperations/createMockUsers`)

[//]: # (  1. &#40;Different command for windows. Can also use Postman to trigger this.)

[//]: # (  2. This will create 100 mock users in the database. You can view them in the database visualizer &#40;Prisma Studio&#41;.)

[//]: # (  3. All this command is doing is triggering the createMockUsers function in the createMockUsers.js file in the api folder. You can view the code in the api folder to see how it works.)

### Prompt Help Template
- First, in your IDE, select all of your files, right click and select Copy Path/Reference. This will copy the file structure of your project.
    - You can copy and paste this file structure into ChatGPT so that it can help you much better.
- Prompt Help Template:
    - ##### "Here is the file structure of our React frontend/SpringBoot 2.6.1, PSQL16 backend: {Paste the file structure you just got, first.}
    - ##### I am a member of a student group developing a ticketing webapp (very similar to ticketmaster) called "PouncePass". We are working off of feature branches in a normal github workflow, using pull requests to submit changes.
    - ##### Our tech stack is: Next.js, React, Axios, TailwindCSS, SpringBoot 2.6.1, PostgreSQL16
    - ##### {Insert any other relevant context here, the more details it has the better it can help you}
    - ##### My current goal is to: {insert your current goal}
    - ##### Given the details I have just provided you, please guide me with detailed steps to reach this goal.
    - ##### Please remember all of this specific context throughout this conversation to provide the most accurate and tailored responses possible."