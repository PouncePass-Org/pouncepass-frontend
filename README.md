# PouncePass Local Development Environment Setup

This guide will walk you through setting up your local development environment for the LitVerse project.

## Prerequisites

- **Node.js and npm** installed. If you don't have them, you can download and install from the [Node.js official website](https://nodejs.org/).
- You have cloned both the frontend and Django backend "development" branches from the repository - https://github.com/orgs/PouncePass-Org/repositories

### Quick Setup Steps
#### Frontend:
1. Open terminal, navigate to the pouncepass-frontend project directory [(that you have already cloned from here)](https://github.com/PouncePass-Org/pouncepass-frontend)
2. Run `npm install`
3. Run `npm start`
    1. This will run the frontend server.
    2. Go to http://localhost:3000/login to see the frontend while you develop.
#### Backend:
1. Open another terminal, navigate to the pouncepass-backendD project directory [(that you have already cloned from here)](https://github.com/PouncePass-Org/pouncepass-backend)
2. Run `pip install -r requirements.txt`
3. Run `python manage.py runserver`
    1. This will run the backend server.
    2. Go to http://127.0.0.1:8000/admin/ to see the backend while you develop.
    3. You can also go to http://127.0.0.1:8000/order/orders to see the API while you develop.
5. Make sure this was successful and that your backend is running.
6. At this point, you're ready to develop.
7. Now, decide on what feature you want to develop and then create a branch for it, which you will make all your changes in. Make your changes, test your changes, then submit a PR once your changes are complete and working.
    1. Be detailed and concise in your PR, so that i can clearly see what it's for.

### Prompt Help Template
- First, in your IDE, select all of your files, right click and select Copy Path/Reference. This will copy the file structure of your project.
    - You can copy and paste this file structure into ChatGPT so that it can help you much better.
- Prompt Help Template:
    - ##### "Here is the file structure of our React frontend/DJango SQLite3 backend: {Paste the file structure you just got, first.}
    - ##### I am a member of a student group developing a ticketing webapp (very similar to ticketmaster) called "PouncePass". We are working off of feature branches in a normal github workflow, using pull requests to submit changes.
    - ##### Our tech stack is: React frontend/DJango SQLite3 backend
    - ##### {Insert any other relevant context here, the more details it has the better it can help you}
    - ##### My current goal is to: {insert your current goal}
    - ##### Given the details I have just provided you, please guide me with detailed steps to reach this goal.
    - ##### Please remember all of this specific context throughout this conversation to provide the most accurate and tailored responses possible."