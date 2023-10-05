# Travelogue

Travelogue is a comprehensive web application tailored for travel enthusiasts. The application provides a platform for users to document their travel experiences, share reviews about destinations, and plan future adventures. This README offers a deep dive into the application's features, structure, and architectural decisions.

# Table of Contents

1- Features
2- Tech Stack
3- Installation & Setup
4- File Structure
5- API Endpoints
6- Database Schema
7- Contributing
8- Acknowledgments
9- License

# Features

1- User Management: Robust user authentication and profile management.
2- Interactive Dashboard: Users can easily visualize and manage their trips.
3- CRUD Operations: Users have the freedom to manage their trips, reviews, and favorite destinations.
4- Responsive Design: The application is accessible on all devices, from mobiles to desktops.

# Tech Stack

1- Backend: Flask
2- Database: SQLite with SQLAlchemy ORM
3- Authentication: Flask-Login

# Installation & Setup

# Clone the Repository

  git clone <git@github.com>:michaelmirhom/Travelogue.git
  cd travelogue

# Backend Setup

  pipenv install
  pipenv shell
  flask run

# File Structure

Backend
config.py: Contains configuration settings.
models.py: Defines the database models.
routes: Houses the API endpoint definitions.

# Database Schema

User: Contains basic user data.
Trip: Stores details of each trip.
Review: Consists of reviews associated with trips or destinations.
Destination: Lists travel destinations.

# Contributing

Contributions are always welcome! Please feel free to submit issues, feature requests, or pull requests.

# License

 MIT
