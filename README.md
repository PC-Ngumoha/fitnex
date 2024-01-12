# Fitnex - Your Ultimate Fitness Companion

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
  - Users can create and customize workout routines based on their fitness goals.
- **Responsive UI:**
  - Developed using React, NextJs, and Tailwind CSS for a visually appealing and responsive user interface.
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

1. **Backend Setup:**
   ```bash
   cd backend/
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend/
   npm install
   npm run dev
   ```

3. Visit `http://localhost:3000` in your browser to access Fitnex.

## Technologies Used

- **Backend:**
  - Django Rest Framework
- **Frontend:**
  - React, NextJs, Tailwind CSS
- **Database:**
  - PostgreSQL
- **API:**
  - Exercise DB API
- **Version Control:**
  - Git
- **Project Management:**
  - Trello Board, Discord

## Project Structure

- `backend/`: Django backend code.
- `frontend/`: React and NextJs frontend code.
- `exercise_db_api/`: Exercise DB API integration.

## API Endpoints

- `/api/exercises/`: Get the list of exercises.
- `/api/workouts/`: Create, update, or delete workout routines.
- ...

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/fooBar`).
3. Commit your changes (`git commit -am 'Add some fooBar'`).
4. Push to the branch (`git push origin feature/fooBar`).
5. Create a new Pull Request.

## Acknowledgments

- The Fitnex team: Chukwuemeka Ngumoha, Aliyu Timilehin, Ibrahim Abdulazeez, Kyrillos Maher.
- Exercise DB API for providing a rich source of exercise data.
- Pexels and Icon8 for media content.
- ChatGPT for text content.

Feel free to explore and enhance Fitnex as we strive to make it the ultimate fitness companion for users worldwide.
