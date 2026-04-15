# 🎬 Netflix Random Show Suggester

## Overview
This project is a simple web-based Netflix-style recommendation tool that suggests random TV shows based on a selected genre. Users can choose a category (Drama, Comedy, Fantasy, or Random), and the app dynamically displays a randomly selected show.

This project was built to practice JavaScript fundamentals such as arrays, functions, randomization, and DOM manipulation.

---

## Features
- 🎭 Select a genre from a dropdown menu  
- 🎲 Get a random show suggestion instantly  
- 📺 Dynamic display of selected shows  
- 🧠 Clean modular JavaScript functions  
- 🎨 Simple and responsive UI  

---

## How It Works
- The user selects a genre from the dropdown menu  
- A random show is selected from that category  
- If "Random" is selected, a genre is chosen first, then a show  
- The result is displayed on the screen immediately  

---

## Project Structure
- `index.html` – Main webpage layout  
- `style.css` – Styling for the application  
- `script.js` – Core logic (main implementation file)  
- `provided.js` – Helper utility functions  
- `shows.js` – Dataset of shows organized by genre  

---

## Core Logic

### Random Genre Selection
The app randomly selects one of the following:
- Drama  
- Comedy  
- Fantasy  

### Random Show Selection
Once a genre is selected, a random show from that category is displayed using a helper function.

---

## Helper Functions
This project uses two prebuilt utility functions:

- `getRandomNumber(min, max)`  
  Returns a random integer between `min` and `max` (inclusive)

- `displayShow(show)`  
  Displays the selected show on the webpage

---

## What I Learned
- Working with arrays and indexing  
- Using random number generation in JavaScript  
- Writing modular functions  
- DOM interaction basics  
- Structuring a frontend JavaScript project  

---

## Future Improvements
- Add more genres (Action, Thriller, Sci-Fi)  
- Add show images and animations  
- Save user preferences  
- Turn into a full recommendation engine  
