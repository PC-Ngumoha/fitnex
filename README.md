# Fitnex — Your Ultimate Fitness Companion

Fitnex is a comprehensive fitness website designed to empower users on their fitness journey. Whether you are a seasoned athlete or just starting, Fitnex offers a personalized approach to exercise, allowing users to tailor their routines based on specific goals, available equipment, and targeted body parts.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Features

- **Exercise Database:**
  - Utilizes the Exercise DB API to populate the database with a vast collection of exercises.
- **Personalized Workouts:**
  - Users can select from our extensive list of available workouts the workouts which meet their personal fitness goals.
- **Responsive UI:**
  - Developed using React, NextJs, and Tailwind CSS along with Material UI and other frontend technologies for a visually appealing and responsive user interface.
- **Efficient Backend:**
  - Powered by Django Rest Framework, ensuring a robust and scalable backend system.
- **Database Management:**
  - PostgreSQL database for efficient data storage and retrieval.
- **Version Control:**
  - Git used for collaborative development and code management.
- **Project Management:**
  - Trello Board and Discord employed for effective task tracking and collaborative planning.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Python 3.x
- Node.js and npm

### Installation

1. **Clone the Repository and go into it:**
   ```
    git clone https://github.com/PC-Ngumoha/fitnex.git
    cd fitnex/
   ```
2. **Backend Setup:**
   ```bash
   cd backend/
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend/
   npm install
   npm run dev
   ```

4. Visit `http://localhost:3000` in your browser to access Fitnex.

## Technologies Used

- **Backend:**
  - Django Rest Framework
  - PyJWT
- **Frontend:**
  - React, NextJs, Tailwind CSS
  - Zustand, Tanstack e.t.c for state management
  - ShadCN UI, Material UI e.t.c for pluggable components
- **Database:**
  - SQLite (_Development_)
  - PostgreSQL (_Production_)
- **API:**
  - Exercise DB API from [Rapid API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/)
  - Cloudinary API
- **Version Control:**
  - Git
  - Github
- **Project Management:**
  - Trello Board
  - Discord

## Project Structure
_As of 12th January, 2024_:

```
fitnex
|-- backend
|   |-- env
|   |-- fitnex_api
|   |   |-- account
|   |   |-- exercise
|   |   |-- fitnex_api
|   |   |-- manage.py
|   |-- README.md
|   |-- requirements.txt
|-- fitnex_frontend
|   |-- app
|   |-- components
|   |-- lib
|   |-- public
|   |-- store
|   |-- .eslintrc.json
|   |-- .gitignore
|   |-- components.json
|   |-- next-env.d.ts
|   |-- next.config.js
|   |-- package.json
|   |-- postcss.config.js
|   |-- tailwind.config.ts
|   |-- tsconfig.json
|-- README.md
```


## API Endpoints

- **GET** `exercise/exercises`: Lists out all exercises in the database. Although due to pagination, you'll only get to see ten or so exercises listed.
- **GET** `exercise/exercises/<ID>`: Gives the full detail for the specific exercise with the id `ID`
- **GET** `exercise/body-parts`: Lists out all the body parts which our exercises are designed to target. e.g `chest`, `cardio`, `arms`, `abs` e.t.c.
- **GET** `exercise/body-parts/<BODY PART>`: Returns all exercises for the given body part `BODY PART`
- ...

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## Acknowledgments

- The Fitnex team: 
  - [Chukwuemeka Ngumoha](https://github.com/PC-Ngumoha)
  - [Aliyu Timilehin](https://github.com/TangoIndiaMango)
  - [Ibrahim Abdulazeez](https://github.com/tech2world)
  - [Kyrillos Maher](https://github.com/Cyril-777)
- [Exercise DB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/) for providing a rich source of exercise data.
- [Pexels](https://www.pexels.com/) and [Icons8](https://icons8.com/) for media content.
- [ChatGPT](https://chat.openai.com/) for text content and providing valuable testing and other help.

Feel free to explore and enhance Fitnex as we strive to make it the ultimate fitness companion for users worldwide. _The baton is now in your hands, run with it 👍_
