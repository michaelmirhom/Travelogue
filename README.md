# Travelogue

Travelogue is a comprehensive web application tailored for travel enthusiasts. The application provides a platform for users to document their travel experiences, share reviews about destinations, and plan future adventures. This README offers a deep dive into the application's features, structure, and architectural decisions.

# Table of Contents

* Features
* Tech Stack
* Installation & Setup

  * Backend Setup
  * Frontend Setup
  
* File Structure
* Database Schema
* Contributing
* Acknowledgments
* License

# Features

* User Management: Robust user authentication and profile management.
* Interactive Dashboard: Users can easily visualize and manage their trips.
* CRUD Operations: Users have the freedom to manage their trips, reviews, and favorite destinations.
* Responsive Design: The application is accessible on all devices, from mobiles to desktops.

# Tech Stack

* Backend: Flask
* Database: SQLite with SQLAlchemy ORM
* Authentication: Flask-Login

# Installation & Setup

* Clone the Repository

  git clone <git@github.com>:michaelmirhom/Travelogue.git
  cd travelogue

# Backend Setup

* pipenv install
* pipenv shell
* Navigate to the Backtend Directory:
   cd server
   * Install the Flask_Cors
   pip install flask-cors
   * set the FLASK_APP environment variable
   export FLASK_APP=app.py
   flask run --port=5555

# Frontend Setup 
 1. Navigate to the Frontend Directory:
  cd Client
 2.  Install Dependencies:
   npm install
 3.   Start the Development Server:
   npm start



# File Structure

* Backend
  config.py: Contains configuration settings.
  models.py: Defines the database models.
  routes: Houses the API endpoint definitions.

# Database Schema

* User: Contains basic user data.
* Trip: Stores details of each trip.
* Review: Consists of reviews associated with trips or destinations.
* Destination: Lists travel destinations.

# Contributing

Contributions are always welcome! Please feel free to submit issues, feature requests, or pull requests.

# License

 MIT
